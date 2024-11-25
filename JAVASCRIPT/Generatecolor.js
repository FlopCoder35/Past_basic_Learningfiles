
let btn = document.querySelector('button');
btn.onclick = function() {
   let h3=document.querySelector('h3');
   h3.innerHTML=getrandomcolor();
   let div=document.querySelector('div');
   div.style.backgroundColor=getrandomcolor();
};

function  getrandomcolor(){
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);

let content =`rgb(${r},${g},${b})`;
return content;

}

