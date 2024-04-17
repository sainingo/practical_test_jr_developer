class UserController {
    async createUser(req, res) {}
    async getUsers(req, res) {
        res.json({ message: 'Get all users' });
    }
    async updateUser(req, res) {}
    async deleteUser(req, res) {}
}

module.exports = new UserController();