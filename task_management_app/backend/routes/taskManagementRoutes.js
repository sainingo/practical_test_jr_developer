const TastManagementController = require('../controllers/taskManagementController');
const router = require('express').Router();

router.post('/task', TastManagementController.createTask);
router.get('/tasks', TastManagementController.getTasks);
router.put('/task/:id', TastManagementController.updateTask);
router.delete('/task/:id', TastManagementController.deleteTask);

module.exports = router;