var express = require('express');
var router = express.Router();
var birdController = require('../controllers/birdController');


router.get('/', birdController.get_birds);
router.get('/create', birdController.create_birds);
router.get('/completed', birdController.completed_birds);
router.post('/create', birdController.post_birds);

module.exports = router;