//import JSONAPISerializer from '@ember-data/serializer/json-api';
import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
    keyForAttribute(attr) {
        return attr;
      }
});
