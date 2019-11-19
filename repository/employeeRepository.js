const Employee = require('./../models/employee')

const getAllEmployee=()=>{
  
   return  Employee.findAll()
}

const createEmployee=(employee)=>{

  return Employee.create(employee);

}

const updateEmployee=(employee)=>{

  return Employee.update(employee);
}

const deleteEmployee=(id)=>{

  return Employee.remove(employee);

}

module.exports = {
    getAllEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};