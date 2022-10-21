// quando usamos  getbyClassName nao precisamos mais especificar o ponto para chamar a class do html

const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}