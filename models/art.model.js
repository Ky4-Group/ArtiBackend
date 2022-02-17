const mongoose = require("mongoose");
const artSchema = mongoose.Schema(
    {
        titre:{type:String,},
        description:{type:String,},
        date:{type:String,},
        image:{type:String,},
        
    }
);

const Art = mongoose.model("art", artSchema);

module.exports = { Art }