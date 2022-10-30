(function(){

   const sliders = [...document.querySelectorAll('.parceiros_body')];
   const buttonNext = document.querySelector('#next');
   const buttonBefore = document.querySelector('#before');
   let value;

   buttonNext.addEventListener('click', ()=>{
      changePosition(1);

   });

   buttonBefore.addEventListener('click', ()=>{
     changePosition(-1);

});

  const changePosition = (add)=>{
     const currentParceiros = document.querySelector('.parceiros_body--show').dataset.id; 
     value = Number(currentParceiros);
     value+= add;
    

    sliders[Number(currentParceiros)-1].classList.remove('parceiros_body--show');
    if(value === sliders.length+1 || value === 0){
     
       value = value === 0 ? sliders.length  : 1;

    }

    sliders[value-1].classList.add('parceiros_body--show');


  }

})();