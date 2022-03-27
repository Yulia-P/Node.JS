const Sequileze = require("sequelize");
const db = require('../db/models');
const Personalinf = db.personalinf;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const personalinf = {
        passport: req.body.passport,
        address: req.body.address,
        maritalStat: req.body.maritalStat,
        children: req.body.children
    };
    Personalinf.create(personalinf)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Personalinf"
            });
        });
};

exports.get = (req, res) => {
    const id = req.params.id;

    Personalinf.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .cetch(err => {
            res.status(500).send({
                message: "Error retrieving Personalinf with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Personalinf.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Personalinf was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Personalinf with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erroe updating Personalinf with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Personalinf.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Personalinf was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Personalinf with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Personalinf with id=" + id
            });
        });
};

exports.getAll = (req, res) => {
    Personalinf.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Personalinf."
            });
        });
};