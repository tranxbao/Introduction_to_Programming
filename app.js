//async javascript tutorial for beginners.
//console.log("Start");
//const items=[1,2,3,4,5];
//items.forEach(item=>{
//    console.log(item);
//})
//console.log("End");
console.log("Start.");
function loginUser (email,password,callback){
    setTimeout(() => {
        console.log("now we have a data.");
        callback({userEmail: email})
    }, 5000);
}
const user=loginUser("tranxbao@gmail.com",123456,(user)=>{
console.log(user);
});


console.log("Finish.");