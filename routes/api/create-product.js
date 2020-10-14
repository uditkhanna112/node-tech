var express=require('express');
var router=express.Router();
var productModel=require('../../models/product');
const { check,validationResult } = require('express-validator');

//Create Post Request
router.post('/',[
    //Express-Validator to check for inputs
    check('Name','Name is required').not().isEmpty(),
    check('Description','Description is required').not().isEmpty(),
    check('RAM','RAM is required').not().isEmpty(),
    check('Processor','Processor is required').not().isEmpty(),
    check('Type','Type is required').not().isEmpty()
],
async(req,res)=>{
    //Printing the errors
    const errors=validationResult(req.body);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    //Destructuring the data
    var {Name,Description,RAM,Processor,Type}=req.body;
    
    try{
        //creating model instance
          let product=new productModel({
              Name,Description,RAM,Processor,Type
          });

          //saving to the database
          let prod=await product.save();
          res.redirect('/read-products');
    }catch(err)
    {
        console.log(err.message);
        res.status(500).send({error:err.message});
    }

});

module.exports=router;