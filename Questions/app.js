
const button=document.querySelectorAll('.question-btn')
const question=document.querySelectorAll('.question')

button.forEach(function(btn){
    btn.addEventListener('click', function(e){
        quest=e.currentTarget.parentElement.parentElement
        quest.classList.toggle('show-text')        
    })
})


