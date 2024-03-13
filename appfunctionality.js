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
            console.log(currentBtn)
            if (currentBtn){
               console.log(currentBtn)
               currentBtn.className = currentBtn.className.replace(' active-btn', '');
            }
            this.className += ' active-btn';
             })
        }
        allSections.addEventListener('click', (e)=>{
         const id= e.target.dataset.id;
         if(id){
            sections.forEach((section)=>{
               section.classList.remove('active');
            })  
            const element= document.getElementById(id);
            element.classList.add('active');
         }
         })

      /*darkthemebtn.addEventListener('click', () => {
         let element= document.body;
         element.classList.add('darktheme');
       })
       
       light_themebtn.addEventListener('click', () => {
         let element= document.body;
         element.classList.remove('darktheme');
       })*/
}

function navigate(){
   window.location.href = 'writer.html'
}

function formatPage(elementid){
   let element = document.getElementById(elementid)
   console.log(element)
   let data= document.getElementById(elementid).textContent

   if(elementid == 'poem'){
      //split at comma an join using newline
      let formattedpoem = data.split(',').join('\n')
      
      //update dom
      element.textContent = formattedpoem
      console.log('formattitng poem....')
   }
   if(elementid == 'article'){
      //split at any whitespace and return an array of substrings
      let wordcount = data.split('/\s+/').length()
      if(wordcount > 100){
         let readmorebtn = document.createElement('button')
         readmorebtn.className = 'readmore'
         let newspan = document.createElement('span')
         newspan.className = 'more'
         newspan.textContent = data.split('/\s+/').slice(100).join(' ')
         element.textContent =+ data.split('/\s+/').slice(0,100).join(' ')
         element.textContent += readmorebtn
         console.log('formatting article....')
      }
   }
   return
}

pageTransitions();
formatPage('poem')
formatPage('article')
