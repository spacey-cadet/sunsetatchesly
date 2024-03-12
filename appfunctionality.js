const sections = document.querySelectorAll('.section');
const controls = document.querySelector('.controls');
const buttons  = document.querySelectorAll('.control');
const allSections= document.querySelector('.maincontent');
const darkthemebtn = document.querySelector('.darkthemebtn');
const light_themebtn = document.querySelector('.lightthemebtn');


function pageTransitions(){
      for(let i=0; i <buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
             })
        }
        sections.addEventListener('click', (e)=>{
         const id= e.target.dataset.id;
         if(id){
            sections.forEach((section)=>{
               section.classList.remove('active');
            })  
            const element= document.getElementById(id);
            element.classList.add('active');
         }
         })

      darkthemebtn.addEventListener('click', () => {
         let element= document.body;
         element.classList.add('darktheme');
       })
       
       light_themebtn.addEventListener('click', () => {
         let element= document.body;
         element.classList.remove('darktheme');
       })
}

pageTransitions();
