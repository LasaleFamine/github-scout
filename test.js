import test from 'ava';
import fn from './src/index';

test('full', async t => {
  const json = await fn('LasaleFamine', 'ragusabot');
  t.is(json.repository.full_name, 'LasaleFamine/ragusabot');
  t.truthy(json.repository.description);
  t.truthy(json.repository.commit.message);
  t.truthy(json.repository.commit.url);
  t.truthy(json.repository.commit.date);
});

test('reject when repo not exist', async t => {
  t.throws(fn('wrong', 'repo'), 'Repository wrong/repo doesn\'t exist');
});
