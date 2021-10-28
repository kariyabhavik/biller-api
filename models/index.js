
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {readdirSync, readFile} from 'fs';
import path, { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
const DataTypes = Sequelize;
const basename = 'index.js';
const dirname = path.resolve("./");
const env = process.env.NODE_ENV || 'development';
import configs from '../config/config2.js'
import { dir } from 'console';
const config = configs[env];
/*readFile('../config/config.json','utf-8',(err,jsonString)=>{
  config = JSON.parse(jsonString)[env];
   });*/

const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
/*
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}*/

readdirSync(dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  // .forEach(async file => {
    //import nn from join(dirname, file)
    
  //   //const { default: dbModel } = await import('./business_registration.js')
  //   const { default: dbModel } = await import(file)
  //   const model = dbModel(sequelize, DataTypes);
  //   db[model.name] = model;
  // });

    import brModel from './business.js'
    //const { default: dbModel } = import()
    let model = brModel(sequelize, DataTypes);
    db[model.name] = model;

    import staffModel from './staff.js'
    //const { default: dbModel } = import()
    model = staffModel(sequelize, DataTypes);
    db[model.name] = model;
  
    import addressModel from './business_addresses.js'
    //const { default: dbModel } = import()
    model = addressModel(sequelize, DataTypes);
    db[model.name] = model;

    import itemModel from './items.js'
    //const { default: dbModel } = import()
    model = itemModel(sequelize, DataTypes);
    db[model.name] = model;

    import partyModel from './parties.js'
    //const { default: dbModel } = import()
    model = partyModel(sequelize, DataTypes);
    db[model.name] = model;

    import billModel from './bills.js'
    //const { default: dbModel } = import()
    model = billModel(sequelize, DataTypes);
    db[model.name] = model;

    import itemHistoriesModel from './item_histories.js'
    //const { default: dbModel } = import()
    model = itemHistoriesModel(sequelize, DataTypes);
    db[model.name] = model;

    import businessStaffsModel from './business_staffs.js'
    //const { default: dbModel } = import()
    model = businessStaffsModel(sequelize, DataTypes);
    db[model.name] = model;

    import loginModel from './logins.js'
    //const { default: dbModel } = import()
    model = loginModel(sequelize, DataTypes);
    db[model.name] = model;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
     

// db.businesses.hasMany(db.staffs , {foreignKey: "company_id"  });
// db.staffs.belongsTo(db.businesses , {foreignKey: "company_id" , as: "businesses"});

db.businesses.hasMany(db.business_addresses , {foreignKey: "company_id" , as: "addresses"});
db.business_addresses.belongsTo(db.businesses , {foreignKey: "company_id"  })
export default db; 