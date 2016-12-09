# github-scout [![Build Status](https://travis-ci.org/lasalefamine/github-scout.svg?branch=master)](https://travis-ci.org/lasalefamine/github-scout)

> Get useful informations from a GitHub repository.


## Install

```
$ yarn add github-scout
```

## Usage

```js
const githubScout = require('github-scout');

githubScout('lasalefamine', 'github-scout', 'ACCESS_TOKEN').then(json => {
	console.log(json);
	//=> {repository: {{full_name: 'lasalefamine/github-scout', ...}}
});
```
## API

### githubScout(username, repository, [ACCESS_TOKEN])

The ACCESS_TOKEN is not required but you will have a limited rate to call the API if the ACCESS_TOKEN is not present.

## License

[MIT](https://github.com/LasaleFamine/phi-zsh-theme/blob/master/LICENSE.md) &copy; LasaleFamine
