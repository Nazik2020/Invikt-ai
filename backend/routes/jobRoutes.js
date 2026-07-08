const express = require('express');
const { getJobs, addJob, updateJob, deleteJob } = require('../controllers/jobController');

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(addJob);

router.route('/:id')
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;
