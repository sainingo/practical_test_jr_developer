const db = require("../config/db");

class TaskManagementService {
    async createTask(task, priority, status, tracking_date) {
        try {
            const data = await db.query(
                "INSERT INTO tasks (task, priority, status, tracking_date) values ($1, $2, $3, $4) RETURNING *",
                [task, priority, status, tracking_date]
            );
            return data.rows[0];
        } catch (e) {
            console.log(e);
        }
    }
    async getTasks() {
        try {
            const data = await db.query("SELECT * FROM tasks");
            return data.rows;
        } catch (e) {
            console.log(e);
        }
    }

    async updateTask(id, task, priority, status, tracking_date) {
        try {
            const data = await db.query(
                "UPDATE tasks SET task = $1, priority = $2, status = $3, tracking_date = $4 WHERE id = $5 RETURNING *",
                [task, priority, status, tracking_date, id]
            );
            return data.rows[0];
        } catch (e) {
            console.log(e);
        }
    }

    async deleteTask(id) {
        try {
            const data = await db.query("DELETE FROM tasks WHERE id = $1", [id]);
            return data.rows[0];
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new TaskManagementService();