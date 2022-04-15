const data = require('../data/user.data.js');

function convertUser(user) {
    if (user.status) {
        user.status = 'Married';
        return user;
    }
    user.status = 'Single';
    return user;
}

exports.create = (req, res, next) => {
    console.log(req.body);
    if (!req.body.email) {
        res.status(400).send({
            message: 'E-mail must be filled'
        });
        return;
    }
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name must be filled'
        });
        return;
    }
    if (!req.body.phone) {
        res.status(400).send({
            message: 'Phone must be filled'
        });
        return;
    }
    return data.create(
        req.body.email,
        req.body.name,
        req.body.phone,
        req.body.maritalStatus)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                title: 'You are doomed',
                message: 'internal server error has occured, nice right?'
            });
        });
}

exports.findAll = (req, res, next) => {
    return data.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                title: 'You are doomed',
                message: 'internal server error has occured, nice right?'
            });
        });
}