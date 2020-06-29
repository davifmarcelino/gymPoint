import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }

  checkpassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Admin;
