const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);





const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Employee = require('./models/Employee');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for seeding');

    // Pehle saare employees delete karo (optional)
    await Employee.deleteMany({});
    console.log('Cleared existing employees');

    // Random employees ka data
    const employees = [
      {
        fullName: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '1234567890',
        department: 'IT',
        designation: 'Software Developer',
        salary: 60000,
        dateOfJoining: new Date('2023-01-15'),
        employmentType: 'Full-time',
        status: 'Active'
      },
      {
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        phoneNumber: '9876543210',
        department: 'HR',
        designation: 'HR Manager',
        salary: 55000,
        dateOfJoining: new Date('2022-06-01'),
        employmentType: 'Full-time',
        status: 'Active'
      },
      {
        fullName: 'Mike Johnson',
        email: 'mike@example.com',
        phoneNumber: '5551234567',
        department: 'Finance',
        designation: 'Accountant',
        salary: 50000,
        dateOfJoining: new Date('2023-03-10'),
        employmentType: 'Part-time',
        status: 'Inactive'
      },
      {
        fullName: 'Sarah Williams',
        email: 'sarah@example.com',
        phoneNumber: '4445556666',
        department: 'Marketing',
        designation: 'Marketing Specialist',
        salary: 52000,
        dateOfJoining: new Date('2023-07-22'),
        employmentType: 'Contract',
        status: 'Active'
      },
      {
        fullName: 'David Brown',
        email: 'david@example.com',
        phoneNumber: '7778889999',
        department: 'IT',
        designation: 'System Administrator',
        salary: 58000,
        dateOfJoining: new Date('2022-11-05'),
        employmentType: 'Full-time',
        status: 'Active'
      }
    ];

    // Insert karo
    await Employee.insertMany(employees);
    console.log('Sample employees added successfully');

    // Disconnect
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  })
  .catch(err => {
    console.error('Seeding error:', err);
    mongoose.disconnect();
  });