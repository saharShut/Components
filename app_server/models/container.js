module.exports = (sequelize, type) => {
    return sequelize.define('el_container', {
        container_id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        container_name: {
            type: type.STRING
        },
        container_descriptor: {
            type: type.STRING
        },
    }, {
        tableName: 'el_container',
        timestamps: false,
    });
}