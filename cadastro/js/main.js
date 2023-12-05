let listaRegistro = {
    ultimoIdGravado: 0,
    pessoas:[{id: 10, nome: "Benedito da Costa", telefone:'(11) 2525-3636'}]
};

function visualizar(pagina){
    document.body.setAttribute('page', pagina);
    id(pagina === 'cadastro' ); {
        document.getElementById('nome').focus();
    }
}

function inserirPessoa(nome, telefone){
    const id = listaRegistro.ultimoIdGravado + 1;
    listaRegistro.pessoas.push({id, nome,telefone});
    desenharTabela();
    visualizar('lista');
};

function desenharTabela(){
    const tbody = document.getElementById("listaRegistroBody");
    if(tbody){
    tbody.innerHTML = listaRegistro.pessoas.map (pessoa =>{
                return `<tr>
                            <td>${pessoa.id}</td>
                            <td>${pessoa.nome}</td>
                            <td>${pessoa.telefone}</td>
                            </tr>`}).join('');
    }
}

function EnviarDados(e){
    e.preventDefault();
    const dados = {id: document.getElementById('codigo').value,
                    nome: document.getElementById('nome').value,
                    telefone: document.getElementById('telefone').value
    };
    console.log(dados);
}

window.addEventListener('load', () =>{
    desenharTabela();
    documento.getElementById("cadastro-registros"). addEventListener('submit', EnviarDados);
});