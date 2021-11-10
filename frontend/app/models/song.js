import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    album: belongsTo('album'),
    genre: belongsTo('genre'),
    artists: hasMany('artist'),
    track: attr('string'),
    imgPath: attr('string'),
    imgSmallPath: attr('string'),
    imgMediumPath: attr('string'),
    duration: attr('number') 
});