const selectors =document.querySelector('selectors')
const selector = document.querySelectorAll('select')
const editor = document.querySelector('editor')
const forms = document.querySelectorAll('form')

function selectAction (){
    editor.addEventListener('click', (e)=>{
        const id = e.target.dataset.id
        if(id){
            forms.forEach((form)=>{
                form.classList.remove('curr')
            })
            const el = document.getElementById(id)
            el.classList.add('curr')
        }
    })

}
function injectDOMELement(formid, elementid){

    let element = document.getElementById(elementid)
    let articeEl = document.createElement('p')
    let data = document.getElementById(formid).value
    articeEl.innerHTML(data)
    element.appendChild(articeEl)

}
selectAction()