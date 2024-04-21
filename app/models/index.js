const config = require('../config/db');
const dataType = require('sequelize');

//for connect database
const sequelize = new dataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};
//ประกาศออฟเจคขึ้นมา เพื่อจะส่ง sequelize ไปทำงาน
db.dataType = dataType;
db.sequelize = sequelize;


//(dataType, sequelize)
db.employee = require("../models/employee.model.js")(sequelize,dataType);
db.setting = require("../models/setting.model.js")(sequelize,dataType);

// one-to-one
// onDelete: 'CASCADE' ลบข้อมูลดาต้าเบส อีกดาต้าเบสลบไปด้วย
db.employee.hasOne(db.setting, {
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.employee);

module.exports = db;