module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        },
        phone: {
            type: Sequelize.STRING,
            field: 'phone'
        },
        maritalStatus: {
            type: Sequelize.BOOLEAN,
            field: 'marital_status'
        }
    });
    return user;
};