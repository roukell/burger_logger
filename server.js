const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
const server = app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a WebSocket server

const { Server } = require('ws');

const wss = new Server({ server });

// Handle connections

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

// Broadcast updates

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);