import Sequelize, { Model } from 'sequelize';

import handlePaginate from './utils/paginate';

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
    return handlePaginate(this, options, page, pageSize);
    // const limit = pageSize;
    // const offset = (page - 1) * pageSize;
    // const docs = await this.findAndCountAll({
    //   ...options,
    //   limit,
    //   offset,
    // });
    // return {
    //   count: docs.count,
    //   pages: Math.ceil(docs.count / pageSize),
    //   rows: docs.rows,
    // };
  }
}

export default Appointment;
