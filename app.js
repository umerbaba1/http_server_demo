const express = require("express");
const app = express();

app.use(express.json());

let users = [
  {
    name: "Umer",
    id: 12,
    kidneys: [
      {
        healthykidney: 1,
        unhealthykidney: 1
      },
    ],
  },
];

app.get("/", (req, res) => {
    const userName=users[0].name
    const userHealthyKidney=users[0].kidneys[0].healthykidney
    const userunhealthyKidneys=users[0].kidneys[0].unhealthykidney
    res.json({
        name:userName,
        userHealthyKidney:userHealthyKidney,
        userUnhealthyKidney:userunhealthyKidneys
    })
});
app.delete('/',(req,res)=>{
    const dataKidney=users[0].kidneys[0]
    dataKidney.splice(0,1)
   
    res.json({
        Msg:"Done Deleted User Kidney",
        data:users[0],
    })
    

})

app.listen(3001);
