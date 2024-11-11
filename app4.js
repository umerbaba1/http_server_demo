const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index2.html')
   
})

app.get('/data',(req,res)=>{
    res.json({
        msg:"Good  to see you"
    })
})


app.listen(5000)