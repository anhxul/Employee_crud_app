const Employee = require('../models/Employee');

// Create
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) { next(err); }
};

// Get all
exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) { next(err); }
};

// Get by ID
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Not found' });
    res.json(employee);
  } catch (err) { next(err); }
};

// Update
exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) return res.status(404).json({ message: 'Not found' });
    res.json(employee);
  } catch (err) { next(err); }
};

// Delete
exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) { next(err); }
};

// Search
exports.searchEmployees = async (req, res, next) => {
  try {
    const { name, department } = req.query;
    const filter = {};
    if (name) filter.fullName = new RegExp(name, 'i');
    if (department) filter.department = department;
    const employees = await Employee.find(filter);
    res.json(employees);
  } catch (err) { next(err); }
};