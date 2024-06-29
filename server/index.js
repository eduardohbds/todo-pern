const express = require("express");
const cors = require("cors");
const pool = require("./db");
// pra que serve o cors?
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos",async (req,res) =>
{
    try {
        const {description} = req.body;
        const newTodo = await pool.
            query("INSERT INTO todo (description) VALUES($1) RETURNING *",
                [description]
            );

        res.json(newTodo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}
)

app.listen(1300, ()=> {
    console.log("Server is running in port 1300");
});