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

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista de amigos está vazia!.");
        return;
    }

    let sorteio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteio];

    document.getElementById("resultado").innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}</li>`;
}
