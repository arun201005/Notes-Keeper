const text = document.querySelector('.notes-container');
const btn = document.querySelector('.button');
let notes = document.querySelectorAll('.box');

function showNotes(){
    text.innerHTML = localStorage.getItem('notes');
}
showNotes();

function storage(){
    localStorage.setItem('notes',text.innerHTML);
}

btn.addEventListener('click',()=>{
    let inpBox = document.createElement('p');
    let addImg = document.createElement('img');
    inpBox.className = "box";
    inpBox.setAttribute('contenteditable','true' );
    addImg.src = "pics/delete.png";
    text.appendChild(inpBox).appendChild(addImg);
})

text.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storage();
    }
    else if(e.target.tagName ==='P'){
        notes = document.querySelectorAll('.box');
        notes.forEach(note => {
            note.onkeyup = function(){
                storage();
            }
        })
    }
})