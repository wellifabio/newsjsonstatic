const express = require("express");
const router = express.Router();

const News = require('./news');

router.post('/', News.create);
router.get('/', News.read);
router.put('/', News.update);
router.delete('/:id', News.del);

module.exports = router