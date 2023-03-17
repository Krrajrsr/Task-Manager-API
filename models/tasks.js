const { default: mongoose } = require("mongoose");
const Mongoose=require("mongoose");
const shortid = require('shortid');

const taskSchema=new Mongoose.Schema({
    id:
    {
        type: String,
        unique: true,
        default: shortid.generate
    },
    
    title:
    {
        type:String,
        required:true,
        unique:false
    }, 

    description:
    {
        type:String,
        required:false,
        unique:false
    },

    status:
    {
        type:Boolean,
        default:false,
        unique:false
    },
})

const TasksList=new mongoose.model("TaskList", taskSchema)

module.exports=TasksList;