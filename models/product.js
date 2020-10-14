var mongoose=require('mongoose');


//products model
var productSchema=mongoose.Schema({
    Name:{
        type:String,
        unique:true,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    RAM:{
        type:Number,
        required:true
    },
    Processor:{
        type:String,
        required:true
    },
    Type:{
        type: String,
        required:true,
        enum : ['Mobile','Laptop'],
        default: 'Mobile'
    }
});

module.exports=Product=mongoose.model('product',productSchema);

