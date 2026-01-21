const {constants}=require('../routes/constants');   



const errorHandler=(err,req,res,next)=>{
    const statuscode=res.statuscode?res.statuscode:500;

    switch(statuscode){
        case constants.VALIDATION_ERROR:
            res.json({title:"validation failed",
                message:err.message,
                stack:err.stack
            });
            break;
        case constants.UNAUTHORIZED_ERROR:
            res.json({title:"unauthorized",
                message:err.message,
                stack:err.stack
            });
            break;
        case constants.FORBIDDEN_ERROR:
            res.json({title:"forbidden",
                message:err.message,
                stack:err.stack
            });
            break;
        case constants.NOT_FOUND_ERROR:
            res.json({title:"not found",
                message:err.message,
                stack:err.stack
            });
            break;
            default:
           
            res.json({title:"internal server error",
                message:err.message,
                stack:err.stack
            });
        
            break;
            console.log("no error, all good");
            break;
        }
    
    
};

module.exports=errorHandler;