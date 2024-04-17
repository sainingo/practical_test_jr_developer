const db = require("../config/db");

class UserService {
    async createUser(name, id_number, age, email) {
        try {
            const user = await db.query(
                "INSERT INTO users (name, id_number, age, email) values ($1, $2, $3, $4) RETURNING *",
                [name, id_number, age, email]
            );
            return user.rows[0];
        } catch (e) {
            console.log(e);
        }
    }
    async getUsers() {
        try {
            const users = await db.query("SELECT * FROM users");
            return users.rows;
        } catch (e) {
            console.log(e);
        }
    }
    async updateUser(id, name, id_number, age, email) {
        try {
            const user = await db.query(
                "UPDATE users SET name = $1, id_number = $2, age = $3, email = $4 WHERE id = $5 RETURNING *",
                [name, id_number, age, email, id]
            );
            return user.rows[0];
        } catch (e) {
            console.log(e);
        }
    }
    async deleteUser(id) {
        try {
            const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
            return user.rows[0];
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserService();