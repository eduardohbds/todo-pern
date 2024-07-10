const pool = require("../../db");

class Todo{
    createTodo = async(res,req) => {
        try {
        const {id} = req.body
        const response = await pool.query("INSERT INTO todo (description) VALUEs ($1) RETURNING *",[id]);
        res.status(200).json({
            mensage: "Item created"
        })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                mensage: "Server error"
            });
        }
    }
    listAll = async(req,res) => {
        try {
            const response = await pool.query("SELECT * FROM todo")
            res.status(200).json(response.rows)
        } catch (error) {
            console.error(error);
        }
    }
    getTodoItem = async (req,res) => {
        try {
            const {id} = req.params
            const response = await pool.query("SELECT * FROM todo WHERE id = $1",[id])
            res.status(200).json(response.rows[0]);
        } catch (error) {
            console.error(error);
        }
    }
    updateTodoItem = async ( req,res ) => {
        try {
            const {id} = req.params
            const {description} = req.body
            const response = await pool.query("UPDATE todo SET description = $1 WHERE id = $2",[description],[id]);
            res.status(200).json({
                message: "Todo modified"
            });
        } catch (error) {
            console.error(error);
        }
    }
    deleteTodoItem = async (req,res) => {
        try {
            const {id} = req.params
            const response = await pool.query("DELETE FROM todo WHERE id = $1",[id])
            res.status(200).json({
                message: "Todo deleted"
            });
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Todo;