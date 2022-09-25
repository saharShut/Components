const Sequelize = require('sequelize');
const ContainerModel = require('../models/container');
const ElementModel = require('../models/element');

const sequelize = new Sequelize('postgresql://postgres:12345678@localhost:5432/elements');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log('Unable to connect to the database', error);
}

const Container = ContainerModel(sequelize, Sequelize);
const Element = ElementModel(sequelize, Sequelize);

Container.hasMany(Element);
Element.belongsTo(Container);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    Container,
    Element,
}