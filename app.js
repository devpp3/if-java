let number;
function num(e){
number = e.target.value;
}

const valid = ()=>{
   


if( number > 100){
   if(number<=200){
       alert("write ans")
   }else{
       alert("wrong ans")
   }

}else{
    if(number <=70){
      alert("correct answer")  
    }
    else{
alert("write and correct")
}
}
}