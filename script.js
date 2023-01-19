function insert(num){
    //a função recebe o valor num na id = resultado, guarda o mesmo e acrescento o próximo.
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    //função para apagar tudo o que está no campo de resultado.
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    //função para apagar um caractere por vez no campo resultado.
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); 
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = 'Campo Vazio';
    }
}