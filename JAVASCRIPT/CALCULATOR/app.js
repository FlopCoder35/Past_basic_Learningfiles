let btns=document.querySelectorAll('button');
let str="";
let inp=document.getElementById('in');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
      if(btns[i].innerText=="Clear"){
        inp.value="";
        inp.innerText=inp.value;
        str="";
      } 
    else  if(btns[i].innerText=="x"){
      let s=  str.slice(0,str.length-1);
        str=s;
        inp.value=s;
        inp.innerText=inp.value;
        
      }  
      else if(btns[i].innerText=="="){
        inp.value=eval(str);
        inp.innerText=inp.value;
        str=inp.value;
       }
       else{
        str+=btns[i].innerText;
      
        inp.value=str;
        inp.innerText=str;
        }
    });
}