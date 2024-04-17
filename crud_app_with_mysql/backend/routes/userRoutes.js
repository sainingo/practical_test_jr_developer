const UserController = require('../controllers/userController');

const router = require('express').Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.getUsers);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;