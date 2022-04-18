function insert(numeroDaCalculadora){
    // document.getElementById("resultado").innerHTML = numeroDaCalculadora;.... só sobrepoem um numero atras do outro
    var numero = document.getElementById("resultado").innerHTML;

    document.getElementById("resultado").innerHTML = numero + numeroDaCalculadora;// ele acrecenta  + +

}
//como ele ira apagar não precisa de um parametro, só ira limpar
function clean(){
    document.getElementById("resultado").innerHTML = "";
}

//de voltar um
function back(){

    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
    console.log(resultado)//com ele consigo ver o que foi apagado pelo console usado tela techa <
}

function calcular(){
    
    var resultado = document.getElementById("resultado").innerHTML;

    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }

    else{
        document.getElementById("resultado").innerHTML = "Insira um cálculo";
    } 


}