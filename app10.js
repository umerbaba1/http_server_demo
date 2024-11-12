// Axios and fetch  better understanding
const axios=require('axios')

// function data(){
    fetch("https://www.postb.in/1731376486882-1902011407073")
    .then(async(data)=>{
       return await data.text()
    }).then((outout)=>{
        console.log(outout)
    })

// }
// data()


async function output(params) {
    const  response= await axios.get("https://httpdump.app/dumps/c576ccca-41a2-4093-b570-e8a9f1c5a839",{
        headers:{
            Authorization:"umer"
        }
    }
    )
    console.log(response.data)
}
output()