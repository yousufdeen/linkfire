import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Used to get album details by id
     * @params(params) default parameter - contain album id
     * @return(Object)
     */
    model(params) {
        return this.store.findRecord('album', params.id);
    }
});
