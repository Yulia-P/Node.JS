const Sequileze = require("sequelize");
const db = require('../db/models');
const Officialinf = db.officialinf;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
    const officialinf = {
        personalNum: req.body.personalNum,
        surname: req.body.surname,
        idDep: req.body.idDep,
        idPost: req.body.idPost,
        idSpec: req.body.idSpec,
        status: req.body.status
    };
    Officialinf.create(officialinf)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Officialinf"
            });
        });
};

exports.get = (req, res) => {
    const id = req.params.id;

    Officialinf.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .cetch(err => {
            res.status(500).send({
                message: "Error retrieving Officialinf with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Officialinf.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Officialinf was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Officialinf with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erroe updating Officialinf with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Officialinf.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Officialinf was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Officialinf with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Officialinf with id=" + id
            });
        });
};

exports.getAll = (req, res) => {
    Officialinf.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Officialinf."
            });
        });
};