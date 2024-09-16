// document.querySelector('.btn1').addEventListener('click',merafunction);
// function merafunction(){

//     let myCartItem=document.createElement('div');
//     let myimg=document.createElement('img');
//     myimg.className='mypic';
//     myimg.src='babbbb.png';
//     myCartItem.append(myimg);

//     myCartItem.className='cartDiv';


//     let cartbox=document.querySelector('.cart');
//     cartbox.append(myCartItem);

//     // document.querySelector('.cart').appendChild(myCartItem);
// }
    
const bar = document.getElementById('bar');
const navv = document.getElementById('pages');
if (bar){
    bar.addEventListener('click', ()=>{
        navv.classList.toggle('active');
    });
}

let value=true;
let button =document.getElementById("checkbox").addEventListener("click",()=>{
    console.log("cliked")
value=!value;
if(value){
    document.body.className="dark"
}
else{
    document.body.classList.remove("dark")
}
})