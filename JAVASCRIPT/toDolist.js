let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
     let li =document.createElement('li');
     li.innerText=inp.value;
     let dlbtn=document.createElement('button');
    dlbtn.innerText='delete';
      li.appendChild(dlbtn);
     ul.appendChild(li);
});

ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let item=event.target.parentElement;
        item.remove();
      
    }
});