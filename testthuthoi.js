const Test=(str) =>  {
   let reversed='';
   for (let x of str){
      reversed =x+reversed ;
   }
console.log(reversed)
console.log(str)
}
Test('Thong')