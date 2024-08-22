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
const nav = document.getElementById('pages');
if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}