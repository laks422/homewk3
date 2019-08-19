const Express=require('express');
var bodyparser=require('body-parser');
var app=new Express();
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('index');
});




app.get('/registration',(req,res)=>{
    res.render('registration');
});
app.post('/read',(req,res)=>{
    var name=req.body.name;
    var rollno=req.body.rollno;
     var admissionno=req.body.admissionno;
     var college=req.body.college;
     var mail=req.body.mail;
     var pswd=req.body.pswd;
    

    
     res.render('read',{name:name,rollno:rollno,admissionno:admissionno,college:college,mail:mail,pswd:pswd});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running on http://localhost:3000");
});