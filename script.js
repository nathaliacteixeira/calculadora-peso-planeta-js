function calcular(){
    let planeta = parseFloat(document.querySelector('#planeta').value);
    let peso = document.querySelector('#peso').value;
    let final;
    let resultado = 0;

    if(isNaN(peso)) {
        alert('Peso inválido!');
        return;
    }

    if(peso != 0){
        resultado  = peso/10 * planeta;
    }else{
        alert("Peso precisa ser maior que 0!");
        return;
    }
    
    switch(planeta){
        case 0.37:
            final = 'O seu peso no planeta Mercúrio equivale á: '+ resultado;
            break;
        case 0.88:
            final = 'O seu peso no planeta Vênus equivale á: '+ resultado;
            break;
        case 0.38:
            final =  'O seu peso no planeta Marte equivale á: '+ resultado;
            break;
        case 2.64:
            final = 'O seu peso no planeta Júpiter equivale á: '+ resultado;
            break;
        case 1.15:
            final = 'O seu peso no planeta Saturno equivale á: '+ resultado;
            break;
        case 1.17:
            final = 'O seu peso no planeta Urano equivale á: '+ resultado;
            break;
        case 0:
            alert('Escolha um planeta!');
    }

    document.querySelector('.resultado').innerHTML = final + 'kg';
}

function cancelar(){
    document.querySelector('#planeta').value = 0;
    document.querySelector('#peso').value = '';
    document.querySelector('.resultado').innerHTML = '';
}