import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.SMALLINT,
        height: Sequelize.DECIMAL(5, 2),
        weight: Sequelize.DECIMAL(5, 2),
      },
      { sequelize }
    );
  }
}

export default Student;
