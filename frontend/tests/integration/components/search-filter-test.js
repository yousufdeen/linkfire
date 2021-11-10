import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders search filter', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('onSearch', function() {
      this.set('searchResult', {
        albums: [{
          title: 'Rajini Songs'
        }],
        genres: [],
        songs: [],
        artist: []
      });
    })
    await render(hbs`<SearchFilter />`);

    await typeIn('.search_inputbox__field', 'Raj');
     
    assert.dom('.search_record-list__items-link').exists();
    
  });
});
