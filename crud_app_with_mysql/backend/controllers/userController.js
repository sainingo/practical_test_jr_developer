const userService = require("../services/userService");

class UserController {
    async createUser(req, res) {
        try {
            const { name, id_number, age, email, } = req.body;
            const user = await userService.createUser(name, id_number, age, email);
            return res.json(user);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
    async getUsers(req, res) {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, id_number, age, email } = req.body;
            const user = await userService.updateUser(id, name, id_number, age, email);
            return res.json(user);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.deleteUser(id);
            return res.json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}

module.exports = new UserController();