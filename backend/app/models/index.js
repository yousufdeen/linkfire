const Sequelize = require('sequelize');

const config = require('../config/db.config');

const albumsModel = require('./albums.model');
const songsModel = require('./songs.model');
const genreModel = require('./genre.model');
const artistModel = require('./artist.model');
const songArtistModel = require('./song.artist.model');


const sequelize = new Sequelize(config.db, config.user, config.password, {
	host: config.host,
	dialect: config.dialect,
  dialectOptions: {
  },
  timezone: "+08:00",
  logging: false
});

const db = {
	sequelize: Sequelize,
	sequelizeIns: sequelize
};

db.albums = albumsModel(sequelize, Sequelize);
db.songs = songsModel(sequelize, Sequelize);
db.artist = artistModel(sequelize, Sequelize);
db.genre = genreModel(sequelize, Sequelize);
db.songArtist = songArtistModel(sequelize, Sequelize);

db.albums.hasMany(db.songs, { as: 'songs', foreignKey: 'album_id', onDelete: 'SET NULL'});
db.songs.belongsTo(db.albums, {
  as: "albums",
  foreignKey: 'album_id'
});

db.genre.hasMany(db.songs, { as: 'songs', foreignKey: 'genre_id', onDelete: 'SET NULL'});
db.songs.belongsTo(db.genre, {
  as: "genre",
  foreignKey: 'genre_id'
});

db.songs.belongsToMany(db.artist, { through: db.songArtist, as: 'artists', foreignKey: 'songsId', onDelete: 'SET NULL'});
db.artist.belongsToMany(db.songs, { through: db.songArtist, as: 'songs', foreignKey: 'artistId', onDelete: 'SET NULL'});





db.ROLES = ["super-admin", "admin", "user"];

module.exports = db;