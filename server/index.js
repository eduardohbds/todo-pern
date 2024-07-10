const express = require("express");
const cors = require("cors");
const pool = require("./db");
const routes = require("./routes");
// pra que serve o cors?
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.get("/todos", async (req,res) =>
{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/todos/:id", async (req,res) =>
    {
        try {
            const {id} = req.params;
            const allTodos = await pool.query("SELECT * FROM todo WHERE todo_id = $1",
                [id]
            );
            res.json(allTodos.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
});

app.put("/todos/:id",async (req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        console.log("id" + id);
        console.log("description" + description);
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description,id]
        );
        res.json("Todo was updated")
    } catch (error) {
        console.error(err.message);
    }
});

app.delete("/todos/:id",async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo was deleted");
    } catch (error) {
        console.error(err.message);
    }
});

app.listen(1300, ()=> {
    console.log("Server is running in port 1300");
});