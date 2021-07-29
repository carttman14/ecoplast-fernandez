
const express=require('express');
const app=express();

const port=4500;

//template engine

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index', {title: 'This is our title'});
})
app.get('/services',(req,res)=>{
    res.render('services', {heading: 'This is our service page'});
})

app.get('/about',(req,res)=>{
    res.render('about', {aboutTitle: 'This is our about page'});
})

app.use((req,res,next)=>{
    res.status(404).render('404',{err:'The page you`re looking for doesn`t exist'});
})
app.listen(port, ()=>{
    console.log(`App listening at port ${port}`)
})