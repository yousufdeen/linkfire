import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | music/albums', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:music/albums');
    assert.ok(route);
  });
});
