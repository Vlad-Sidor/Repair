const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const ServiceInfo = sequelize.define('serviceinfo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    quiz: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imgone: {type: DataTypes.STRING, allowNull: false},
    imgtwo: {type: DataTypes.STRING, allowNull: false},
    imgthree: {type: DataTypes.STRING, allowNull: false},
    imgfour: {type: DataTypes.STRING, allowNull: false},
    radioquestionone: {type: DataTypes.STRING, allowNull: false},
    radioquestiontwo: {type: DataTypes.STRING, allowNull: false},
    radioquestiononethree: {type: DataTypes.STRING, allowNull: false},
    radioquestionfour: {type: DataTypes.STRING, allowNull: false},
    imgonequestion: {type: DataTypes.STRING, allowNull: false},
    imgtwoquestion: {type: DataTypes.STRING, allowNull: false},
    imgthreequestion: {type: DataTypes.STRING, allowNull: false},
    imgfourquestion: {type: DataTypes.STRING, allowNull: false},
});

const Service = sequelize.define('service', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasMany(Service)
Service.belongsTo(User)

Service.hasOne(ServiceInfo)
ServiceInfo.belongsTo(Service)

module.exports = {
    User,
    ServiceInfo,
    Service
};


