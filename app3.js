const express= require('express')
const app =express()
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.post('/data',(req,res)=>{
    const a =parseInt(req.body.a)
    const b= parseInt(req.body.b)
    res.json({
        msg:`${a+b}`
    })
})
app.get('/',(req,res)=>{
    res.json({
        msg:"Done"
    })
})

app.listen(4000)