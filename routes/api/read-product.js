var productModel=require('../../models/product');
var router=require('express').Router();


//Request to fetch the data
router.get('/',
async(req,res)=>{

try{
//finds all the documents from database       
let data=await productModel.find();
res.render("all-products.ejs",{data:data});
}
catch(err){
console.log(err.message);
res.status(500).send({error:err.message});
}
});

try{
router.get('/:id',async(req,res)=>{
    let data=await productModel.findById(req.params.id);
    
    res.render('view-product.ejs',{data:data});
});
}catch(err)
{
    res.status(500).send({err:err.message});
}

module.exports=router;