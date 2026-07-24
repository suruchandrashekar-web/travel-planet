let input =document.querySelector("#place");
let button=document.querySelector(".btn");
let result=document.querySelector(".result");


async function read(){
    let res=await fetch("http://localhost:3000/location");
    let data= await res.json();
    console.log(data);
    write(data);
}
 
function write(data){

   button.addEventListener("click",function(){
      let value=input.value;
    let found=false;
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
       if(value===data[i].place){
        window.location.href=data[i].loca;
        found=true;
        break;
       }
    }
    if(!found){
      alert("your data is invalid");
    }
}
 )}
read();
 