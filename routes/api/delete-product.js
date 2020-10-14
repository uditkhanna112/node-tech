var productModel=require('../../models/product');
var router=require('express').Router();


//Request to update the data


exports.deleteRecord=async(req,res)=>{

//finds the document from database with matching id       
try{
let data=await productModel.findById(req.params.id);

if(!data)
{
    return res.status(404).json({msg:'Product Not Found'});
}
await data.remove();
res.redirect('/read-products');
}
catch(err){
console.log(err.message);
res.status(500).send({error:err.message});
}
};

