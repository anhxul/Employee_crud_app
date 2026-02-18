const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  department: { type: String, required: true, enum: ['HR','IT','Finance','Marketing'] },
  designation: { type: String, required: true },
  salary: { type: Number, required: true, min: 1 },
  dateOfJoining: { type: Date, required: true },
  employmentType: { type: String, required: true, enum: ['Full-time','Part-time','Contract'] },
  status: { type: String, default: 'Active', enum: ['Active','Inactive'] }
});

module.exports = mongoose.model('Employee', employeeSchema);