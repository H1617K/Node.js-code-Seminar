const express = require('express');

const router = express.Router();
 const{ createUser } = require('./controller');

router.post('/api/createUser',createUser);

module.exports = router;