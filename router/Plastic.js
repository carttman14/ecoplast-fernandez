
const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{

    res.render('plastic',{
        plasticArray:[
            {id:"01", name: 'wicker', description:'Mimbre para múltiples usos'},
            {id:"02", name: 'vivo', description:'Vivo para maletines'},
            {id:"03", name: 'enbono', description:'enbono para decoración'},
            {id:"04", name: 'ophelia', description:'Ofelia para decoración'},
        ]
    })
})


module.exports=router;