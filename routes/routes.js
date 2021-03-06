const router = require('express').Router();
const noteController = require('../controllers/note');

router.get('/', noteController.index);

router.get('/notes', noteController.list);

router.get('/notes/:id', noteController.show);

module.exports = router;