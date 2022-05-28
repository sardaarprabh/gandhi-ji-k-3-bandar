 const closedFace=document.querySelector('.eyes');
 const closedEars=document.querySelector('.ears');
 const closedMouth=document.querySelector('.mouth');

 closedFace.addEventListener('click',()=>{
   if(closedEars.classList.contains('ears')){
   closedEars.classList.add('active');
   closedFace.classList.remove('active');
   }
 });

 closedEars.addEventListener('click',()=>{
  if(closedFace.classList.contains('eyes')){
  closedMouth.classList.add('active');
  closedEars.classList.remove('active');
  }
});
closedMouth.addEventListener('click',()=>{
  if(closedMouth.classList.contains('mouth')){
    closedFace.classList.add('active');
    closedMouth.classList.remove('active');
  }
});