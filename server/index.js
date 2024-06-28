const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(1300, ()=> {
    console.log("Server is running in port 1300");
});
