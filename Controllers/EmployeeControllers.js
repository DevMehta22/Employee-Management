const Employee = require("../Modules/Employee")

const EmpAdd = async(req,res)=>{
    const {Emp_name,Emp_post,Emp_ctc} = req.body;
   
    try{
        const Data = await Employee.create({Emp_name,Emp_post,Emp_ctc})
        res.status(200).json({Data}) 
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const GetEmpById = async(req,res)=>{
    const {id} = req.params;
    try{
        const SingleEmpDetails = await Employee.find({_id:id})
        res.status(200).json({SingleEmpDetails})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const GetEmps = async(req,res)=>{
    try{
        const Details = await Employee.find()
        res.status(200).json({Details})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

const UpdateEmpById = async(req,res)=>{
    const {id} = req.params;
    try{
        const NewData = await Employee.findByIdAndUpdate({_id:id},{...req.body},{new:true})
        res.status(200).json({NewData})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})        
    }
}

const DeleteEmpById = async(req,res)=>{
    const {id} = req.params;
    try{
        const DeletedData = await Employee.findByIdAndDelete({_id:id})
        if(!DeletedData){
            res.status(404).json({msg:"Data not found"})
        }
        res.status(200).json({msg:"Entry Deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }    
}

const DeleteEmps = async(req,res)=>{
    try{
        const Details = await Employee.deleteMany()
        res.status(200).json({msg:"Data deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

module.exports={
    EmpAdd,
    GetEmpById,
    GetEmps,
    UpdateEmpById,
    DeleteEmpById,
    DeleteEmps

}