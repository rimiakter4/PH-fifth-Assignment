
const transectionData=[];
// heart function
function commonheart(){
let  initialheart = parseInt(document.getElementById('nav-heart').innerText);
let totalHeart = initialheart+1 ;
document.getElementById('nav-heart').innerText=totalHeart;

}

// heart seection 
document.getElementById('card-heart').addEventListener('click',function(e){
e.preventDefault();
commonheart();
//  document.getElementById('card-heart').style.="red";
})

document.getElementById('card-hear-2').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-3').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-4').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-5').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-6').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-7').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-8').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})
document.getElementById('card-hear-9').addEventListener('click',function(e){
    e.preventDefault();
    commonheart();
})


// calling function
function callAlert(heading,paragraph,number){
    
const para=document.getElementById(paragraph).innerText;
const Codenum=document.getElementById(number).innerText;
alert( "📞 Calling" +" " +para+" "+ "service"+" "+ Codenum+"....");

let totalCoin=parseInt(document.getElementById('coin').innerText);
if(totalCoin >= 20){
    let newcoin=totalCoin-20;
document.getElementById('coin').innerText=newcoin;
//  alert("invalid coin ");
}
else{
     alert("invalid coin ");}
// let newcoin=totalCoin-20;
// document.getElementById('coin').innerText=newcoin;}


let data={
    name:document.getElementById(heading).innerText,
    number:document.getElementById(number).innerText,
    date : new Date().toLocaleTimeString()
}
transectionData.push(data);
const historySection=document.getElementById('history-section');
historySection.innerText="";
for (const data of transectionData){
    const div=document.createElement("div")
    div.innerHTML=`
        
              
                <div class=" p-3">
                <div class="flex justify-around items-center  bg-[#FAFAFA] lg:h-[80px]  rounded-xl"><div>
                    <h1 class="lg:text-[16px] font-bold">${data.name}</h1>
                    <p class="text-[14px]">${data.number}</p>


                </div>
                <div class="text-[13px]">
                  ${data.date}
                </div>
            </div>

    `
    historySection.appendChild(div);



}
}

// call details 

document.getElementById('call-1').addEventListener('click',function(e){
e.preventDefault();
callAlert('national','emergency','code');


})
document.getElementById('call-2').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-2','emergency-2','code-2');


})
document.getElementById('call-3').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-3','emergency-3','code-3');


})
document.getElementById('call-4').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-4','emergency-4','code-4');


})
document.getElementById('call-5').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-5','emergency-5','code-5');


})
document.getElementById('call-6').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-6','emergency-6','code-6');


})

document.getElementById('call-7').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-7','emergency-7','code-7');


})
document.getElementById('call-8').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-8','emergency-8','code-8');


})
document.getElementById('call-9').addEventListener('click',function(e){
e.preventDefault();
callAlert('national-9','emergency-9','code-9');


})




// history clear 
document.getElementById('clear-btn').addEventListener('click',function(e){
    document.getElementById('history-section').innerText="";
})



// // calling function
// function callAlert(heading,paragraph,number){
// const para=document.getElementById(paragraph).innerText;
// const Codenum=document.getElementById(number).innerText;
// alert( "📞 Calling" +" " +para+" "+ "service"+" "+ Codenum+"....");

// let totalCoin=parseInt(document.getElementById('coin').innerText);
// if(totalCoin < 20){
//     alert("invalid coin ")
// }
// else{
// let newcoin=totalCoin-20;
// document.getElementById('coin').innerText=newcoin;

// }
// let data={
//     name:document.getElementById(heading).innerText,
//     number:document.getElementById(number).innerText,
//     date : new Date().toLocaleTimeString()
// }
// transectionData.push(data);
// const historySection=document.getElementById('history-section');
// historySection.innerText="";
// for (const data of transectionData){
//     const div=document.createElement("div")
//     div.innerHTML=`
        
              
//                 <div class=" p-3">
//                 <div class="flex justify-around items-center  bg-[#FAFAFA] lg:h-[80px]  rounded-xl"><div>
//                     <h1 class="lg:text-[16px] font-bold">${data.name}</h1>
//                     <p class="text-[14px]">${data.number}</p>


//                 </div>
//                 <div class="text-[13px]">
//                   ${data.date}
//                 </div>
//             </div>

//     `
//     historySection.appendChild(div);



// }
// }

// copy function
function CopyCount(Copyid,Countid){
let copyText=document.getElementById(Copyid);
navigator.clipboard.writeText(copyText.innerText);
alert("number is copied :"+ copyText.innerText);
   let totalCopyCount=parseInt(document.getElementById(Countid).innerText);
let newCopyNumber=totalCopyCount+1;
document.getElementById(Countid).innerText=newCopyNumber;
}



// copy details

document.getElementById('copy-btn-1').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code','count-copy');


})

document.getElementById('copy-btn-2').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-2','count-copy');


})

document.getElementById('copy-btn-3').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-3','count-copy');


})

document.getElementById('copy-btn-4').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-4','count-copy');


})

document.getElementById('copy-btn-5').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-5','count-copy');


})

document.getElementById('copy-btn-6').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-6','count-copy');


})

document.getElementById('copy-btn-7').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-7','count-copy');


})

document.getElementById('copy-btn-8').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-8','count-copy');


})

document.getElementById('copy-btn-9').addEventListener('click',function(e){
    e.preventDefault();
    CopyCount('code-9','count-copy');


})



