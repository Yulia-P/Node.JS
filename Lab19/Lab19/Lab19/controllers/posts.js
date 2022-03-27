const Sequileze = require("sequelize");
const db = require('../db/models');
const Posts = db.posts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.post) {
        res.status(400).send({
            message: "Content can not empty"
        });
        return;
    }
    const posts = {
        post: req.body.post,
    };
    Posts.create(posts)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Posts"
            });
        });
};

exports.get = (req, res) => {
    const id = req.params.id;

    Posts.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .cetch(err => {
            res.status(500).send({
                message: "Error retrieving Posts with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Posts.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num[0] === 1) {
                res.send({
                    message: "Posts was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Posts with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erroe updating Posts with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Posts.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Posts was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Posts with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Posts with id=" + id
            });
        });
};

exports.getAll = (req, res) => {
    Posts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Posts"
            });
        });
};