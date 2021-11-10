import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, currentURL } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | music-carousel', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      heading: 'Albums',
      showMoreLink: true,
      route: 'music.albums',
      detailLink: 'music.albums.detail',
      record: [
        {
          id: 1,
          imgPath: 'https://filmfare.wwmindia.com/content/2020/jul/rajnikanth21595322020.jpg',
          title: 'Rajni Songs'
        }
      ]
    })
  })

  test('it renders music carousel', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MusicCarousel 
      @heading={{this.heading}}
      @route={{this.route}}
      @record={{this.record}}
      @detailLink={{this.detailLink}}
      @showMoreLink={{this.showMoreLink}}
    />`);

    assert.dom('.music-carousel_header__title').hasText('Albums');
    assert.dom('.music-carousel_header__link').hasText('See more');
    assert.dom('.music-carousel_grid-items__title .music-carousel_grid-items__link').hasText('Rajni Songs');

  });
});
