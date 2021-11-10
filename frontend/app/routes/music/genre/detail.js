import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Used to get genre details by id
     * @params(params) default parameter - contain genre id
     * @return(Object)
     */
    model(params) {
        return this.store.findRecord('genre', params.id);
    }
});
