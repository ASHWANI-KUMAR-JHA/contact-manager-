//@description get all contacts 
//@route GET/api/contacts
//@access public
const getContacts =(req,res)=>{
    res.status(200).json({messages:"Get all contacts"});
};


//@description get all contacts 
//@route GET/api/contacts/:id
//@access public

const getcontact=(req,res)=>{
    res.status(200).json({messages:`get a contact for id ${req.params.id}`});
}


//@description post  contact 
//@route post/api/contacts
//@access public
const createContact =(req,res,next)=>{
    console.log("the req body is :",req.body);
    const{name,email,phone}=req.body;
    if(!name||!email||!phone)   {
        res.status(400);
       return next(new Error("all fields are mandatory"));
    };

    res.status(201).json({messages:"create a contact"});

};


//@description update  contact S
//@route put/api/contacts/:id
//@access public
const updateContact =(req,res)=>{
    res.status(200).json({messages:`update a contact for id ${req.params.id}`});
}




//@description delete  contact 
//@route delete/api/contacts/:id
//@access public
const deleteContact =(req,res)=>{
    res.status(200).json({messages:`delete a contact for id ${req.params.id}`});
}




module.exports={
    getContacts,
    getcontact,
    createContact,
    updateContact,
    deleteContact
}; 