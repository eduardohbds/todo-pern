const express = require("express");
const cors = require("cors");
const pool = require("./db");
const routes = require("./routes");
// pra que serve o cors?
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1300, ()=> {
    console.log("Server is running in port 1300");
});