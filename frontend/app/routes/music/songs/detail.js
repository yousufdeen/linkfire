import Route from '@ember/routing/route';

export default Route.extend({
    /*
     * Redirect to home
     * @params(transition) default parameter
     * @return(Null)
     */
    beforeModel(transition) {
        this.transitionTo('/'); 
    }
});
