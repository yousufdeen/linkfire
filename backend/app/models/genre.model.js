module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define("genre", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING
    },
    imgPath: {
      type: Sequelize.STRING
    },
    imgSmallPath: {
      type: Sequelize.STRING
    },
    imgMediumPath: {
      type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING(255),
        defaultValue: 'genres'
    }
  }, {
    freezeTableName: true,
    tableName: 'genre'
  });

  return Genre;
};