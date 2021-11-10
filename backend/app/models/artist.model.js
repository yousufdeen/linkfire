module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define("artist", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255)
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
      type: {
        type: DataTypes.STRING(255),
        defaultValue: 'artists'
      }
    }, {
      freezeTableName: true,
      tableName: 'artist'
    });
  
    return Artist;
  };