const express=require('express')
const router=express.Router()
const Todo=require("../config/TodoSchema.js")

// Getting Todos
router.get('/todos',async(req,res)=>{
    try{
    const todos=await Todo.find()
    res.status(200).json(todos);
    }catch{
        res.status(404).json("Error Occured")
    }
})


// Sending Todos
router.post('/todos',async (req,res)=>{
   try{
    const {title,desc}=req.body;
   const newTodo= await Todo.create({
        title,
        desc
    })
    res.status(200).json(newTodo);
    }catch{
        res.status(404).json("Error Occured")
    }

})

// Updating Todos
router.put('/todos/:id',async (req,res)=>{
   try{
    const {id}=req.params;
   const updatedtodo= await Todo.updateOne({_id:id},{
        $set:req.body
    })
    res.status(200).json(updatedtodo);
    }catch{
        res.status(404).json("Error Occured")
    }
})
// Deleting Todos
router.delete('/todos/:id',async (req,res)=>{
   try{
    const {id}=req.params;
   const DeleteTodo= await Todo.deleteOne({_id:id})
    res.status(200).json(DeleteTodo);
    console.log(DeleteTodo);
    }catch{
        res.status(404).json("Error Occured")
    }
    
})

module.exports=router;