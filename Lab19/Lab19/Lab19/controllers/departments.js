const Sequileze = require("sequelize");
const db = require('../db/models');
const Departments = db.departments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.department) {
        res.status(400).send({
            message: "Content can not empty"
        });
        return;
    }
    const departments = {
        department: req.body.department,
        leader: req.body.leader,
        phoneNum: req.body.phoneNum
    };
    Departments.create(departments)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Departments"
            });
        });
};

exports.get = (req, res) => {
    const id = req.params.id;

    Departments.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .cetch(err => {
            res.status(500).send({
                message: "Error retrieving Departments with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Departments.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Departments was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Departments with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erroe updating Departments with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Departments.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Departens was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Departmnets with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Departments with id=" + id
            });
        });
};

exports.getAll = (req, res) => {
    Departments.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving departments."
            });
        });
};