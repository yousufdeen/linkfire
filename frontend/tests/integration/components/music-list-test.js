import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | music-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders music list', async function(assert) {

    await render(hbs`<MusicList />`);
    assert.dom('.music-list_nav__link').hasText('Songs');

  });
});
