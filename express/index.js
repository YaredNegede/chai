const express = require('express')
const repository =module.require('./../repository/employeeRepository')
const app = express()
const port = 80
 

app.get('/employee', (req, res) => {
    res.send( getAllEmployee())
});


app.get('/employee/create', (req, res) => {
    res.send(repository.createEmployee())
});


app.get('/employee/update/{id}', (req, res) => {
   
    res.send(repository.updateEmployee())
});

app.get('/employee/delete/{id}', (req, res) => {
   
    res.send(repository.deleteEmployee())
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))