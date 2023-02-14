const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento) => {
    
    evento.preventDefault();

    nome = evento.target.elements['nome'].value;
    quantidade = evento.target.elements['quantidade'].value;

    const lista = document.getElementById('lista');

    novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

});