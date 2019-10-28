import Sequelize, { Model } from 'sequelize';

import SequelizePaginate from './utils/SequelizePaginate';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }

  static async paginate(options, page = 1, pageSize = 20) {
    return SequelizePaginate.paginate(this, options, page, pageSize);
  }
}

export default Appointment;
