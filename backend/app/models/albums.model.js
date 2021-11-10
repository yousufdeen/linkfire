module.exports = (sequelize, Sequelize) => {
  const Albums = sequelize.define("albums", {
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
    tableName: 'albums'
  });

  return Albums;
};