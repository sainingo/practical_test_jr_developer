const taskManagementService = require("../services/taskManagementService");

class TastManagementController {
    async createTask(req, res) {
        try {
            const { task, priority, status, tracking_date } = req.body;
            const data = await taskManagementService.createTask(task, priority, status, tracking_date);
            return res.json(data);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async getTasks(req, res) {
        try {
            const data = await taskManagementService.getTasks();
            return res.json(data);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { task, priority, status, tracking_date } = req.body;
            const data = await taskManagementService.updateTask(id, task, priority, status, tracking_date);
            return res.json(data);
        } catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const data = await taskManagementService.deleteTask(id);
            return res.json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}

module.exports = new TastManagementController();