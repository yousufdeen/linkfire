import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Used to get genre list
     * @params(Null)
     * @return(Object)
     */
    model() {
        return this.store.findAll('genre');
    }
});
