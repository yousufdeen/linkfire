import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | music/genre', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:music/genre');
    assert.ok(route);
  });
});
