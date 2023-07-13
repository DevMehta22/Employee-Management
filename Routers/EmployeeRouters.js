const express = require('express')
const{
    EmpAdd,
    GetEmpById,
    GetEmps,
    UpdateEmpById,
    DeleteEmpById,
    DeleteEmps
} = require('../Controllers/EmployeeControllers')
const router = express.Router() 

router.post("/addEmp",EmpAdd)
router.get("/getEmps",GetEmps)
router.get("/getEmpDetail/:id",GetEmpById)
router.patch("/updateEmpData/:id",UpdateEmpById)
router.delete("/delete",DeleteEmps)
router.delete("/deleteEntry/:id",DeleteEmpById)

module.exports = router