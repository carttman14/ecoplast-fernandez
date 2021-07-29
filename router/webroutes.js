const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('index', {title: 'Bienvenidos a Ecoplast Fernández, transformando progresos'});
})
router.get('/services',(req,res)=>{
    res.render('services', {heading: 'This is our service page'});
})

router.get('/about',(req,res)=>{
    res.render('about', {aboutTitle: 'This is our about page'});
})


module.exports=router;

