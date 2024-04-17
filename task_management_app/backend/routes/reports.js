const ShowStatusAndPrioritiesController = require("../reports/showStatusAndPriorities");


const router = require('express').Router();

router.get('/showStatusAndPriorities', ShowStatusAndPrioritiesController.showStatusAndPriorities);

module.exports = router;