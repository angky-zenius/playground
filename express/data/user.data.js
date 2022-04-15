const db = require('../models');
const User = db.User;

exports.create = (email, name, phone, maritalStatus) => {
    const user = {
        email: email,
        name: name,
        phone: phone,
        maritalStatus: maritalStatus
    };
    return User.create(user);
}

exports.findAll = () => {
    return User.findAll();
}