import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | music/songs/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:music/songs/index');
    assert.ok(route);
  });
});
