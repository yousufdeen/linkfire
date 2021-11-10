import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
    albums: hasMany('album'),
    genres: hasMany('genre'),
    songs: hasMany('song'),
    artists: hasMany('artist')   
});