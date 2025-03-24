const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      helloWorld()
    }
    if (event.key === 'Escape') {
        nameInput.value = ''
      }
  });

function limpar(){
    nameInput.value = ''
    messageP.innerText = ''

}