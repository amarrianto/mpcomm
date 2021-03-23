//1. import module sequelize agar bisa create connection ke postgresdb
import Sequelize from 'sequelize';
import config from '../../config/config'
import Account from './account.model';

console.log

//2. config database option akan di load dari file .env
const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: 'postgres',
    host: '192.168.100.254'
  },
);

sequelize
	.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.log(err));

// tambahkan object Sequelize Op dan export spy bisa di pake di controller
const Op = Sequelize.Op;

//3. import all model dan store di variable models
const models = {
  // Regions: sequelize.import('./RegionModel'),

  orders : sequelize.import('./orders.model'),
  ordersLineItems : sequelize.import('./ordersLineItems.model'),
  product : sequelize.import('./product.model'),
  productImages: sequelize.import('./productImages.model'),
  account : sequelize.import('./account.model'),
  status : sequelize.import('./status.model'),
  address : sequelize.import('./address.model')
};

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// 5. export sequalize agar bisa di-call di module lain
export { sequelize,Op };
export default models;
