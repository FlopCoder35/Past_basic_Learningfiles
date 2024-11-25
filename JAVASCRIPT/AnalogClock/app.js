 let hr=document.getElementById('hrs');
 let mn=document.getElementById('min');
 let sc=document.getElementById('sec');
setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotate=30*htime+mtime/2;
    mrotate=6*mtime;
    srotate=6*stime;
  hr.style.transform=`rotate(${hrotate}deg)`;
  mn.style.transform=`rotate(${mrotate}deg)`;
   sc.style.transform=`rotate(${srotate}deg)`; 
},1000);