//Write missing code here
const mongoose = require('mongoose');

  const schema = mongoose.Schema({
    EmpName: String,
    designation: String,
    empId: String,
    img_url: String,
  });

const EmployeeModel = mongoose.model('model', schema)
module.exports = EmployeeModel;