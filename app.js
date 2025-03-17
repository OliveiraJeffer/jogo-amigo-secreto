let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let amigo = nome.value.trim();

    if (amigo == '') {
        alert('Por favor insira um valor válido para nome');
    } else {
        amigos.push(amigo);
        atualizarLista();
        nome.value = '';
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}