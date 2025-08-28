document.getElementById('card-heart').addEventListener('click',function(e){

e.preventDefault();

// commonheart();

let  initialheart = parseInt(document.getElementById('nav-heart').innerText);
let totalHeart = initialheart+1 ;
document.getElementById('nav-heart').innerText=totalHeart;
// document.getElementById('card-heart').style.="red";

})


function commonheart(){
let  initialheart = parseInt(document.getElementById('nav-heart').innerText);
let totalHeart = initialheart+1 ;
document.getElementById('nav-heart').innerText=totalHeart;

}
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