const express = require('express');
const app = express();

app.use(express.json())

// method , timestamp, url

// function allData(req,res,next){
//     const startTime = Date.now();
//     const method=req.method
//     const url =req.url
//     console.log(` Method ${method} , Url http://localhost:3002${url}`)
    
//     // Use 'finish' event to calculate response time after the request is processed
//     res.on('finish', () => {
//         const endTime = Date.now();
//         const timeTaken = endTime - startTime; // Time in milliseconds
//         console.log(`Request processing time: ${timeTaken} ms`);
//     });
//     next()
// }


app.get('/add/:a/:b',datahandler);

app.post('/multiple',(req,res)=>{
   console.log(req.body)
   res.json({
    msg:req.body
   })
} );



function datahandler(req,res){
    const a =parseInt(req.params.a)
    const b =parseInt(req.params.b)

    res.json({
        first_number:a,
        second_number:b
    })

}




app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
