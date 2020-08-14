const Burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

module.exports = (app) => {

  router.get("/api/all", (req, res) => {
      Burger.findAll({}).then((results) => {
      res.json(results);
    })
  });

  router.post("/api/new", (req, res) => {
    Burger.create({
      author: req.body.author,
      body: req.body.body
    }).then((results) => 
    res.json(results)
    );
  });

  router.put("/api/devour", (req, res) => {
    Burger.update(
      { devour: true },
      { where: { id: req.params.id } }
    ).then(result => res.end())
  })
};
