const express=require("express");
const app=express();
// Middleware
const middleware=(req,res,next)=>{
    console.log('hello my middleware');
    next();
}

app.use(middleware);
app.get('/',(req,res)=>{
    res.send('Hello world from the server');
});
app.get('/dashboard',middleware,(req,res)=>{
    res.send('Hello world from the server');
});
app.get('/login',(req,res)=>{
    res.send('Hello world from the server');
});

app.listen(3000,()=>{
    console.log("server is running at 3000");
})
