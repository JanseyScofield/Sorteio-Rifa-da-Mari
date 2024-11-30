let iCont;
const qtdNumeros = 120;
const numerosCadastrados = document.getElementById('bloco-numeros');

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

preencherTabelaRifa();
