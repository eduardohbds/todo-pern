const pool = require("../../db")

module.exports = {
    async listAll (req,res) {
        try {
            const response = await pool.query("SELECT * FROM todo");
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Problem in the server"
            });
        }
    }
}