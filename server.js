const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});