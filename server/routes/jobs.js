const express = require('express')

const router = express.Router()
const {
  createTicket,
  getAllTicket,
  getTicket 
} = require('../controllers/jobs')

router.route('/createTicket').post(createTicket)
router.route("/getTicket/:id").get(getTicket);
router.route("/getTicket").get(getAllTicket);
// router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)
//user_route.get('/invoice-download',getTicket.generateReport);
module.exports = router
