// let starttime;
// function data(){
//     starttime=Date.now()
// }
// data()
// let endtime

//  setTimeout(()=>{
//     endtime=Date.now()
//  },2000)


// console.log(endtime-starttime)


const  contacts=["umer'","kounsain","love"]

let newContacts=[...contacts ,"Umer"]

console.log(newContacts)

const umer={
    age:12,
    hobbies:["web-developmnet"]
}
const  updatedumer={
    ...umer,
    location:"Sringar"
}
console.log(updatedumer)


