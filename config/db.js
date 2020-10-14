var config=require('config');
var mongoose=require('mongoose');
var mongoURI=config.get('URI');

//code to connect to database
const connect=async ()=>{
    try{
        await mongoose.connect(mongoURI,
           { useNewUrlParser: true,
            useUnifiedTopology: true
            }
            );
        console.log("Mongodb STarted");
    }
    catch(err)
    {
        console.error(err);
        process.exit(1);
    }

}

module.exports=connect;