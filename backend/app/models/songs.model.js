module.exports = (sequelize, DataTypes) => {
    const Songs = sequelize.define("songs", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      album_id: {
        type: DataTypes.INTEGER
      },
      genre_id: {
        type: DataTypes.INTEGER
      },
      track: {
        type: DataTypes.STRING(255),
      },
      imgPath: {
        type: DataTypes.STRING(255),
      },
      imgSmallPath: {
        type: DataTypes.STRING
      },
      imgMediumPath: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.FLOAT,
      },
      type: {
        type: DataTypes.STRING(255),
        defaultValue: 'songs'
      }
    }, {
      freezeTableName: true,
      tableName: 'songs'
    });
  
    return Songs;
  };