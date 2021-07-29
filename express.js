
const express=require('express');
const app=express();

const port=process.env.PORT || 3000;

//template engine

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+"/public"));

//Web Routes
app.use('/', require('./router/webroutes'))

app.use('/plastic', require('./router/Plastic'))

app.use((req,res,next)=>{
    res.status(404).render('404',{err:'The page you`re looking for doesn`t exist'});
})
app.listen(port, ()=>{
    console.log(`App listening at port ${port}`)
})