const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento) => {
    
    evento.preventDefault();

    nome = evento.target.elements['nome'].value;
    quantidade = evento.target.elements['quantidade'].value;

    const lista = document.getElementById('lista');
    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong');
    
    lista.appendChild(novoItem);
    novoItem.appendChild(numeroItem);
    
    novoItem.classList.add('item');        
    numeroItem.innerHTML = quantidade;
    novoItem.innerHTML += nome;

});