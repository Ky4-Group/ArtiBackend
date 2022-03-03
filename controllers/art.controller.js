const { Art } = require("../models/art.model");
const { Utilisateur } = require("../models/utilisateur.model");



//afficher

const index=(req, res, next) => 
{
    Art.find()
    .then((art) =>{res.json({art})})
    .catch(error=>{res.json({error})})      
}


// art.save()
// .then(response => {
//     res.json({
//         message:'Art Added Sucessfull!'
//     })
// })
// .catch(eroor => {
// res.json({
//     message:'An error Occured!'
// })
// })




// Utilisateur.findByIdAndUpdate(
//     req.body.utilisateur,
//     {$push: {arts: art._id}},
//     { upsert: true,new : true},
//     function(err, model) {
    
     
    
//         console.log(err);
//     }
// );

//ajouter


const add = (req, res, next) => {

    console.log(req.file);

        let art= new Art({
        
            titre:req.body.titre,
            description:req.body.description,
            date:req.body.date,  
            image: req.body.image,
            prix: req.body.prix,
            utilisateur: req.body.utilisateur
        });
        
         
        
        console.log(art._id)
    art.save()
.then(response => {
    res.json({
        message:'Art Added Sucessfull!'
    })
})
.catch(eroor => {
res.json({
    message:'An error Occured!'
})
})
if (res.statusCode==200)
{
Utilisateur.findByIdAndUpdate(
    req.body.utilisateur,
    {$push: {arts: art._id}},
    { upsert: true,new : true},
    function(err, model) {
    
     
    
        console.log(err);
    }
);

}
       
        console.log(art)
  
    }
    

//modifier
const update =(req, res, next)=>
{
    let id=req.body.id
    let updateData={
        titre:req.body.titre,
        description:req.body.description,
        date:req.body.date,  
        image: req.body.image
    }
    Art.findByIdAndUpdate(id, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Art updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'An error Occured!'
    })
})
}


//supprimer

const destroy =(req,res,next) =>{
  let id= req.body.id
  Art.findByIdAndRemove(id)
  .then(()=>{
      req.json({
          message: 'Art deleted successfully!'
      })
  })
  .catch(error =>{
      res.json({
          message:'An error Occured!'
      })
  })
}


  module.exports={
    index,add,update,destroy

}







//old add


// const add = (req, res, next) => {

//     console.log(req.file);

//         let art= new Art({
        
//             titre:req.body.titre,
//             description:req.body.description,
//             date:req.body.date,  
//             image: req.body.image,
//             prix: req.body.prix,
//             utilisateur: req.body.utilisateur
//         });
        
         
//         console.log(art)
  
//     art.save(function(err,art){
        
//         Utilisateur.findByIdAndUpdate(
//             req.body.utilisateur,
//             {$push: {arts: art}},
//             { upsert: true,new : true},
//             function(err, model) {
            
             
            
//                 console.log(err);
//             }
//         );
//         })
       
    
  
//     }