import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import { action , get, set, setProperties} from '@ember/object';


export default Component.extend({
    classNames: ['search'],
    
    // Inject service
    store: service(),
    router: service(),

    searchText: '',
    searchResult: null,
    loading: false,

    /*
     * Get search result
     * @params(Null)
     * @return(Object)
     */
    getSearchResult() {
        const searchText = get(this, 'searchText');
        set(this, 'loading', true);
        this.store.queryRecord('search', {text: searchText}).then(records => {
            setProperties(this, {
                searchResult: records,
                loading: false
            });
        });
    },
    
    /*
     * Set debounce event
     * @params(Null)
     * @return(Null)
     */
    @action
    onSearch() {
       const searchText = get(this, 'searchText');

       if(searchText.length > 2) {
           debounce(this, this.getSearchResult, 800);
       }
       else {
            setProperties(this, {
                loading: false,
                searchResult: null
            })
       }
    },

    /*
     * Redirection
     * @params(path, model) path -> route path, model-> route model
     * @return(Null)
     */
    @action
    redirectTo(path, model) {
        event.preventDefault();
        setProperties(this, {
            loading: false,
            searchResult: null,
            searchText: ''
        })
        get(this, 'router').transitionTo(path, model);
    }

});
