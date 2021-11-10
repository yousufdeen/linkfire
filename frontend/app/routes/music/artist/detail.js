import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Used to get artist details by id
     * @params(params) default parameter - contain artist id
     * @return(Object)
     */
    model(params) {
        return this.store.findRecord('artist', params.id);
    }
});
