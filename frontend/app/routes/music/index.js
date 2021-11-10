import Route from '@ember/routing/route';

import { hash } from 'rsvp';

export default Route.extend({
    /*
     * Used to get artist, genres, artists list
     * @params(Null)
     * @return(Object)
     */
    model() {
        return hash({
            albums: this.store.findAll('album'),
            genres: this.store.findAll('genre'),
            artists: this.store.findAll('artist')
        });
    }
});
