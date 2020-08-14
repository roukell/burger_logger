const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models/burger");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./routes/api-routes.js");
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});