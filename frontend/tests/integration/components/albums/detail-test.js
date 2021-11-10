import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | albums/detail', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      album: {
        imgPath: 'https://filmfare.wwmindia.com/content/2020/jul/rajnikanth21595322020.jpg',
        title: 'Rajni Songs',
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

  test('it renders albums details with songs list', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Albums::Detail @album={{this.album}} />`);

    assert.dom('.album-details_header__img').exists();
    assert.dom('.album-details_header__title').exists();
    assert.dom('.album-details_header__play-btn').exists();
    assert.dom('.songs-list').exists();
    assert.dom('.songs-list_item').exists({count: 2});
    assert.dom('.songs-list_item__img').hasAttribute('src', 'https://filmfare.wwmindia.com/content/2020/jul/rajnikanth21595322020.jpg');
    assert.dom('.songs-list_item__track').hasText('Kabali');
    assert.dom('.songs-list_item__artists').exists();
  });
});
