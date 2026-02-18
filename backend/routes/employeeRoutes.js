const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployees
} = require('../backend/controllers/employeeController');

router.get('/search', searchEmployees);
router.route('/').post(createEmployee).get(getAllEmployees);
router.route('/:id').get(getEmployeeById).put(updateEmployee).delete(deleteEmployee);

module.exports = router;