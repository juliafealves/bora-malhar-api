import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import authConfig from '../../config/auth';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password)
        user.password_hash = await bcrypt.hash(user.password, authConfig.salt);
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
