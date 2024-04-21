require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

const db = require("./app/models");
//การเรียกใช้งาน
db.sequelize.sync({force: true}).then(()=>{
    console.log('Database sync . . . .');
});
//.then แสดงผลว่ารันเซอร์ได้
//force: true ดร็อปทิ้งสร้างใหม่
//force: false ไม่ดร็อปทิ้ง


app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});