const pool = require("../../db");

module.exports = {
    async CreateTodoItem(req, res) {
        try {
            const { description } = req.body;
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
}

