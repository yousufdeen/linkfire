module.exports = (sequelize, DataTypes) => {
    const SongArtist = sequelize.define("song_artist", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      songsId: {
        type: DataTypes.INTEGER
      },
      artistId: {
        type: DataTypes.INTEGER
      }
    }, {
      freezeTableName: true,
      tableName: 'song_artist'
    });
  
    return SongArtist;
  };