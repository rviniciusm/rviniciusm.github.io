(function(){
    const titleDoar = [...document.querySelectorAll('.doar_title')];

    titleDoar.forEach(doar =>{
         doar.addEventListener('click', ()=>{
            let height = 0;
            let answer = doar.nextElementSibling;
            let addPadding = doar.parentElement.parentElement;


            addPadding.classList.toggle('doar_padding--add');
            doar.children[0].classList.toggle('doar_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
         });
     });
})();