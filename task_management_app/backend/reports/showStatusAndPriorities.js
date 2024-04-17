const showStatusAndPriorities = require("../services/showStatusAndPriorities");

class ShowStatusAndPrioritiesController {
    async showStatusAndPriorities(req, res) {
        try {
        const data = await showStatusAndPriorities.showStatusAndPriorities();
        return res.json(data);
        } catch (e) {
        console.log(e);
        res.status(400).json(e);
        }
    }
    }

module.exports = new ShowStatusAndPrioritiesController();
