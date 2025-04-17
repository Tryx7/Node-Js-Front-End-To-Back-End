const express= require('express');
const app= express();
const path= require('path');
const collection= require('./mongo')
const templatePath= path.join(__dirname,'./templates')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine',"hbs")
app.set("views",templatePath)

app.get('/',(req,res)=>{
    res.render('home')
})


app.post('/sendMsg',async (req,res)=>{

    const msg= req.body.msg
    
    await collection.insertMany([{msg}])

    res.send("Your Message has been Sent")

})

app.listen(3000,()=>{
    console.log("port connected")
})