import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders header with logo and trigger search filter', async function(assert) {
    
    await render(hbs`<Header />`);
    assert.dom('.header_logo__img').exists();

    assert.dom('.header_searchbox').exists();

  });
});
