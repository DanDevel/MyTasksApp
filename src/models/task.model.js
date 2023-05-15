module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("mytasks", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      limit: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      }
    });
  
    return Task;
  };
  