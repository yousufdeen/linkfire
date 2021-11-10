import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | songs-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      record: {
        songs: [
          {
            track: 'Kabali',
            imgPath: 'https://filmfare.wwmindia.com/content/2020/jul/rajnikanth21595322020.jpg',
            duration: 23.32,
            artists: [
              {
                name: 'A.R.Rahman'
              }
            ]
          }
        ]
      }
    })
  })

  test('it renders songs list', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SongsList @record={{this.record}} />`);

    assert.dom('.songs-list').exists();
    assert.dom('.songs-list_item').exists({count: 2});
    assert.dom('.songs-list_item__img').hasAttribute('src', 'https://filmfare.wwmindia.com/content/2020/jul/rajnikanth21595322020.jpg');
    assert.dom('.songs-list_item__track').hasText('Kabali');
    assert.dom('.songs-list_item__artists').exists();
  });
});
