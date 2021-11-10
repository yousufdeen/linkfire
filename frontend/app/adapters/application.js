//import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
    host: 'http://143.198.94.169',
    namespace: 'api/music'
});
