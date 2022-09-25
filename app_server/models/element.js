
module.exports = (sequelize, type) => {
    return sequelize.define('el_element', {
        element_id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        element_name: {
            type: type.STRING
        },
        element_description: {
            type: type.STRING
        },
        element_amount: {
            type: type.INTEGER
        },
    }, {
        tableName: 'el_element',
        timestamps: false
    });
}
