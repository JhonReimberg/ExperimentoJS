    var nome = window.document.getElementById('caixaNome');
    var idade = window.document.getElementById('suaIdade');
    var idade2 = window.document.getElementById('idadeAmigo');
    var calcular = window.document.getElementById('calcular');
    var calcular2 = window.document.getElementById('calcular2');
    var pegaValorIdade = Number(idade.value);
    var pegaValorIdade2 = Number(idade2.value);
    var pegaNome = (nome.value);
    var soma2 = Math.abs(pegaValorIdade - pegaValorIdade2);



function resultado() {

    

    calcular.innerHTML = (`${pegaNome}, você tem ${pegaValorIdade} anos de idade.`);

    if (pegaValorIdade < pegaValorIdade2) {
        calcular2.innerHTML = (`E você é ${soma2} anos mais novo que o seu amigo.`)

    }
    else if (pegaValorIdade == pegaValorIdade2) {
        calcular2.innerHTML = ("E você tem a mesma idade que o seu amigo.")

    
    }
    
    else {
        calcular2.innerHTML = (`E você é ${soma2} anos mais velho que o seu amigo.`)


    }
    
}
function nomeEmBranco(){
    if(idade = "" ) window.alert("INSIRA OS DADOS CORRETAMENTE");{
    }
    }
