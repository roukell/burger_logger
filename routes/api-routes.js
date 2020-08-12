const Burger = require("../models/burger.js");

module.exports = (app) => {

  app.get("/api/all", (req, res) => {
    Burger.findAll({}).then((results) => {
      res.json(results);
    })
  });

  app.post("/api/new", (req, res) => {
    Burger.create({
      author: req.body.author,
      body: req.body.body
    }).then(results => res.end());
  });

  app.put("/api/devour/:id", (req, res) => {
    Burger.update(
      { devour: true },
      { where: { _id: req.params.id } }
    ).then(result => res.end())
  })
};
