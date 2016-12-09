'use strict';
const url = require('url');
const got = require('got');
const filterObj = require('filter-object');

const API_GITHUB_REPOS = 'https://api.github.com/repos/';

module.exports = (user, repo) => {
	const repoUrl = url.resolve(API_GITHUB_REPOS, `${user}/${repo}`);
  const commitsRepoUrl = repoUrl + '/commits';

	const p1 = got(repoUrl, {
		json: true
	})

  const p2 = got(commitsRepoUrl, {
    json: true
  })

  return Promise.all([p1, p2])
    .then(res => {
      const reposDetails = res[0].body;
      const commitsDetails = res[1].body;
      let newRepoObj = {}
      newRepoObj.repository = filterObj(reposDetails, [
        'full_name',
        'description',
        'fork',
        'forks_url',
        'issues_url',
        'commits_url',
        'downloads_url',
        'open_issues_count',
        'forks',
        'watchers',
        'subcribers_count',
        'stargazers_count',
        'network_count',
        'has_wiki',
        'has_issues'
      ])
      newRepoObj.repository.commit = {};
      newRepoObj.repository.commit.message = commitsDetails[0].commit.message;
      newRepoObj.repository.commit.url = commitsDetails[0].commit.url;
      newRepoObj.repository.commit.date = commitsDetails[0].commit.author.date;
      return newRepoObj;
    })
	  .catch(err => {
		  if (err.statusCode === 404) {
		    throw new Error(`Repository ${user}/${repo} doesn\'t exist`);
		}

		throw err;
	});
};
