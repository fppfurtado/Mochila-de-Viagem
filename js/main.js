const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento) => {
    
    evento.preventDefault();

    nome = evento.target.elements['nome'].value;
    quantidade = evento.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);

});

function criarElemento(nome, quantidade) {

    const lista = document.getElementById('lista');
    const novoItem = document.createElement('li');
    const numeroItem = document.createElement('strong');
    
    novoItem.classList.add('item');    
    novoItem.appendChild(numeroItem);
    
    numeroItem.innerHTML = quantidade;    
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

}