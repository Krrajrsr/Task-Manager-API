const TasksList = require("../models/tasks");

//Creating task(POST)
const createTask=async (req, res, next) =>{
    try{

        const { title} = req.body;

        // Validate the input data
        if (!title) {
          const error = new Error('Title is required');
          error.status = 400;
          throw error;
        }
    
        const addtask=new TasksList(req.body);
        
        const insertTask=await addtask.save();
        res.status(201).send(insertTask);

    }catch(err){
       next(err);

    }
};

//Getting all  task(GET)
const getAllTasks= async (req, res, next) =>{
    try{
        
        const getAll=await TasksList.find({});
        res.send(getAll);

    }catch(err){
        err.status=400;
        err.message="Bad Request";
        next(err);

    }
};

//Getting task by id(GET)
const getTaskById= async (req, res, next) =>{
    try{
       
        const getTask=await TasksList.findOne({id: req.params.id});
        if(!getTask){
            return res.status(404).send({error:"Task not found on server"});
        }
        res.send(getTask);

    }catch(err){
        next(err);

    }
};


//update by id (PUT)
const updateTask=async (req, res, next) =>{
    try{
        const upTask= await TasksList.findOneAndUpdate({id:req.params.id}, req.body,{
            new:true
        });
        if(!upTask){
            return res.status(404).send({error:"Task not Found"});
        }
        res.send(upTask);
    }catch(err){
        next(err);
    }
};


//DELETE a task
const deleteTask=async (req, res, next) => {
    try {
      const deleteTask = await TasksList.findOneAndDelete({ id: req.params.id });
      if (!deleteTask) {
        return res.status(404).send({error:"Task not Found, Please enter a valid task id"});
      }
      res.send({ message: "Task deleted successfully" });
    } catch (err) {
        next(err);
    }
  };

  module.exports = { createTask, getAllTasks,getTaskById,updateTask,deleteTask};