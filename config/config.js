const {Sequelize}=require('sequelize');
const sequelize=new Sequelize({
  host: "localhost",
  username: "root",
  password: "root",
  database: "my_school",
  dialect: "mysql",
});

module.exports=sequelize;