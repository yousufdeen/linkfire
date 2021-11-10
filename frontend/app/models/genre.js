import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
    songs: hasMany('song'),
    title: attr('string'),
    imgPath: attr('string'),
    imgSmallPath: attr('string'),
    imgMediumPath: attr('string')
});
