import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | music app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    
    assert.equal(currentURL(), '/');
    assert.dom('.music-carousel_header__title').exists({count: 3});
    assert.dom('.music-list_nav__link').exists();
    assert.dom('.music-list_nav__link').hasText('Songs');

    await click('.music-list_nav__link');
    assert.equal(currentURL(), '/songs');
  });

  test('visiting /songs', async function(assert) {
    await visit('/songs');
    
    assert.equal(currentURL(), '/songs');
    assert.dom('.music-carousel_header__title').exists();
    assert.dom('.music-carousel_header__title').hasText('Songs');
  });

  test('visiting /genre', async function(assert) {
    await visit('/genre');
    
    assert.equal(currentURL(), '/genre');
    assert.dom('.music-carousel_header__title').exists();
    assert.dom('.music-carousel_header__title').hasText('Genre');
  });

  test('visiting /albums', async function(assert) {
    await visit('/albums');
    
    assert.equal(currentURL(), '/albums');
    assert.dom('.music-carousel_header__title').exists();
    assert.dom('.music-carousel_header__title').hasText('Albums');
  });

  test('visiting /artist', async function(assert) {
    await visit('/artist');
    
    assert.equal(currentURL(), '/artist');
    assert.dom('.music-carousel_header__title').exists();
    assert.dom('.music-carousel_header__title').hasText('Artists');
  });

});
