const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

require("./server/db/mysql.js");
const router = require("./server/routers/main.js");

app.set("view engine", "hjs");
app.set("views", __dirname + "/server/views");
app.use(express.static(__dirname + "/server/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);

var server = app.listen(process.env.PORT || 8000, function(){
  console.log("Server is listening on port " + server.address().port);
});
