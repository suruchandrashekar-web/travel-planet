async function getdata(){
    let res=await fetch("http://localhost:3000/readstory");
    let data=await res.json();
    console.log(data);
    storydata(data);
}
function storydata(data) {
    let boxes = document.querySelectorAll(".readstorybox");
    data.forEach((ele, index) => {
        boxes[index].innerHTML = `
            <img src="${ele.image}">
            <p class="date">${ele.date}</p>
            <p class=time>${ele.time}</p>
            <h3 class=heading>${ele.heading}</h3>
            <button onclick="readstory1(${index})"class=btn1>${ele.button}</button>
        `;
    });
}


function readstory1(index){
    if(index===0){
        window.location.href="../readstory1/readstory1.html";
    }else if(index===1){
        window.location.href="../readstory2/readstory2.html";
    }else if(index===2){
        window.location.href="../readstory3/readstory3.html";
    }else if(index===3){
        window.location.href="../readstory4/readstory4.html";
    }else if(index===4){
          window.location.href="../readstory5/readstory5.html";
    }else if(index===5){
          window.location.href="../readstory6/readstory6.html";
    }else if(index===6){
          window.location.href="../readstory7/readstory7.html";
    }else if(index===7){
          window.location.href="../readstory8/readstory.html";
    }else if(index===8){
          window.location.href="../readstory9/readstory.html";
    }else if(index===9){
          window.location.href="../readstory10/readstory10.html";
    }else if(index===10){
          window.location.href="../readstory11/readstory11.html";
    }else if(index===11){
          window.location.href="../readstory12/readstory12.html";
    }
}
getdata();








async function getdata1(){
    let res = await fetch("http://localhost:3000/places");
    let data = await res.json();
    console.log(data);
    storedata1(data);
}
function storedata1(data){
    let store = document.querySelectorAll(".sixjson1");
    data.forEach((ele,index)=>{
       store[index].innerHTML = `
    <img src="${ele.image}">
    <p class="paragetdata">${ele.date}</p>
    <h2 class="getdatah2">${ele.heading}</h2>
    <button onclick="viewintensity(${index})"class="getbtn">VIEW ITINERARY</button>
    <p class="getdatapara1">${ele.from}</p>
    <h4 class="person">${ele.person}</h4>
`;
    });
}

function viewintensity(index){
    if(index===0){
        window.location.href="../viewintensity/viewintensity.html"
    }else if(index===1){
        window.location.href="../viewintensity2/viewintensity2.html"
    }else if(index===2){
        window.location.href="../viewintensity3.html/viewintensity3.html"
    }else if(index===3){
        window.location.href="../viewintensity4/viewintensity4.html"
    }else if(index===4){
        window.location.href="../viewintensity5/viewintensity5.html"
    }else if(index===5){
        window.location.href="../viewintensity6/viewintensity6.html"
    }else if(index===6){
        window.location.href="../viewintensity7/viewintensity7.html"
    }else if(index===7){
        window.location.href="../viewintensity8/viewintensity8.html"
    }else if(index===8){
        window.location.href="../viewintensity9/viewintensity9.html"
    }else if(index===9){
        window.location.href="../viewintensity10/viewintensity10.html"
    }else if(index===10){
        window.location.href="../viewintensity11/viewintensity11.html"
    }else if(index===11){
        window.location.href="../viewintensity12/viewintensity12.html"
    }else if(index===12){
        window.location.href="../viewintensity13/viewintensity13.html"
    }else if(index===13){
        window.location.href="../viewintensity14/viewintensity14.html"
    }else if(index===14){
        window.location.href="../viewintensity15/viewintensity15.html"
    }
}










getdata1();


async function readstorys(){
    let res=await fetch("http://localhost:3000/readstorys1");
    let data=await res.json();
    console.log(data);
    readstorys1(data);
}
function readstorys1(data){
    let readstory1=document.querySelectorAll(".eight1");
    data.forEach((ele,index)=>{
        readstory1[index].innerHTML=`
         <img src=${ele.image}/>
         <p class="readpara">${ele.date}</p>
         <p class="readtime">${ele.time}</p>
         <h2 class ="readheading">${ele.heading}</p>
         <button onclick="readst(${index})" class="readbtn">READ STORY</button>
         `;
    })
}
readstorys();
   
function readst(index){
    if(index===0){
        window.location.href="../story1/story1.html";
    }else if(index===1){
        window.location.href="../story2/story2.html";
    }else if(index===2){
        window.location.href="../stort3/story3.html";
    }else if(index===3){
        window.location.href="../story4/story4.html";
    }else if(index===4){
        window.location.href="../story5/story5.html";
    }
}











async function discover(){
    let res = await fetch("http://localhost:3000/discover");
    let data = await res.json();
    console.log(data);
    discover1(data);
}
function discover1(data){
    let discover = document.querySelectorAll(".fourth");
    data.forEach((ele,index)=>{
        discover[index].innerHTML = `
            <img src="${ele.image}">
            <p class="city1">${ele.city}</p>
            <p class="country">${ele.country}</p>
            <button onclick="openDiscover(${index})" class="discoverbtn">DISCOVER</button>
        `;
    });
}
 function openDiscover(index){
    if(index===0){
        window.location.href="../discover2/discover2.html";
    }else if(index === 1){
         window.location.href="../discoverl/discover1.html";
    }else if(index===2){
        window.location.href="../discover3/discover3.html";
    }else if(index===3){
        window.location.href="../discover4/discover4.html";
    }else if(index===4){
        window.location.href="../discover5/discover5.html";
    }else if(index===5){
        window.location.href="../discover6/discover6.html";
    }else if(index===6){
        window.location.href="../discover7/discover7.html";
    }else if(index===7){
        window.location.href="../discover8/discover8.html";
    }else if(index===8){
        window.location.href="../discover9/discover9.html";
    }else if(index===9){
        window.location.href="../discover10/discover10.html";
    }
 }
discover();





/*last email button */

let lastemail = document.querySelector("#emaillast");
let Subscribenow = document.querySelector(".signup");
console.log(Subscribenow);
Subscribenow.addEventListener("click", function () {
    console.log("Button Clicked");
    if (lastemail.value.trim() === "") {
        alert("Please enter your email");
        return;
    }
   console.log("Before Redirect");
window.location.href = "loginpage/signup.html";
console.log("After Redirect");
});



/*subscribe*/
let inputtype = document.querySelector(".inputtype");
let subscribe = document.querySelector(".Subscribenow");

subscribe.addEventListener("click", function () {

    if (inputtype.value.trim() === "") {
        alert("Please enter your email");
        return;
    }

    window.location.href = "loginpage/signup.html";
});



/*readmore button*/



let backgroundbtn=document.querySelector(".backgroundbtn");
backgroundbtn.addEventListener("click",function(){
    window.location.href="../readmore1/readmore.html"
})


let downloadBTN1 =document.querySelector(".downloadBTN1");
downloadBTN1.addEventListener("click",function(){
    window.location.href="../viewlist/viewlist.html"
})

let downloadBTN2=document.querySelector(".downloadBTN2");
downloadBTN2.addEventListener("click",function(){
    window.location.href="../download/download.html"
})


let sevenbtn =document.querySelector(".sevenbtn");
sevenbtn.addEventListener("click", function(){
    window.location.href="../cars/cars.html";
})


let tenjsonbtn =document.querySelector(".tenjsonbtn");
tenjsonbtn.addEventListener("click",function(){
    window.location.href="../sellingbooks/sellingbooks.html";
});

function inspiration(){
    window.location.href="../articles/articles.html";
}

function planing(){
    window.location.href="../planing/planing1.html";
}

let cart =document.querySelector(".cart");
cart.addEventListener("click",function(){
    window.location.href="../cart/cart.html";
})

let terms=document.querySelector(".terms");
terms.addEventListener("click" ,function(){
    window.location.href="../termsandcontions/terms.html";
})

let privacy =document.querySelector(".privacy1");
privacy.addEventListener("click",function(){
    window.location.href="../termsandcontions/terms.html";
})


let fliter =document.querySelector(".fliter");
fliter.addEventListener("click",function(){
    window.location.href="../fliter/fliter.html";
})




