const Sequileze = require("sequelize");
const db = require('../db/models');
const Specialty = db.specialty;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.specialty) {
        res.status(400).send({
            message: "Content can not empty"
        });
        return;
    }
    const specialty = {
        specialty: req.body.specialty
    };
    Specialty.create(specialty)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Specialty"
            });
        });
};

exports.get = (req, res) => {
    const id = req.params.id;

    Specialty.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .cetch(err => {
            res.status(500).send({
                message: "Error retrieving Specialty with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Specialty.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Specialty was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Specialty with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erroe updating Specialty with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Specialty.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Specialty was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Specialty with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Specialty with id=" + id
            });
        });
};

exports.getAll = (req, res) => {
    Specialty.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Specialty."
            });
        });
};