import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Used to get songs list
     * @params(Null)
     * @return(Object)
     */
    model() {
        return this.store.findAll('song');
    }
});
