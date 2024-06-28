const express = require("express");
const cors = require("cors");
// pra que serve o cors?
const app = express();

app.use(cors());
app.use(express.json());

app.listen(1300, ()=> {
    console.log("Server is running in port 1300");
});
