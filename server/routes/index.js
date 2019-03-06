const express = require('express');
const router = express.Router();
const timesheet = require('./timesheet');
router.use('/timesheet', timesheet);
module.exports = router;
