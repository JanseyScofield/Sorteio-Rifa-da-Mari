let iCont;
const qtdNumeros = 120;
const numerosCadastrados = document.getElementById('bloco-numeros');
const numeroSorteado = document.getElementById('numero-sorteado');
const roleta = document.getElementById('roleta');

function preencherTabelaRifa(){
    for(iCont = 1; iCont <= qtdNumeros; iCont++){
        const novoNumero = document.createElement('button')
        novoNumero.classList.add('numero-cadastrado');
        novoNumero.textContent = iCont;
        //novoNumero.addEventListener('click', x);
        novoNumero.disabled = true;
    
    
        numerosCadastrados.appendChild(novoNumero)
    }
}

function sortearNumero(){
    numeroSorteado.textContent = '-';
    roleta.classList.add('animacao-sorteio');
    setTimeout(() => {
        numeroSorteado.textContent = Math.floor(Math.random() * qtdNumeros) + 1;
        roleta.classList.remove('animacao-sorteio');
        roleta.classList.add('fim-sorteio');
        setTimeout(() => {
            roleta.classList.remove('fim-sorteio');
        }, 1000);
    }, 5000);
}

preencherTabelaRifa();
