function funcao1(){

    alert("BEM-VINDO(A) A PRIMEIRA OPERAÇÃO, ESPERO QUE ESTEJA PREPARADO (OU NÃO). \n\n                              CLIQUE EM (OK) PARA COMEÇAR")

    let valor = Number(prompt("Informe o valor do fechamento de caixa desse mês: \n \nNO LUGAR DA VIRGULA COLOQUE O PONTO( . )"));

    let media = 756.5;

    let resultado = valor  * 0.10 ;

    let somaMulta = resultado + valor;

    if( valor >= media){
        alert("PARABÉNS, SUA LOJA ESTÁ DENTRO DO VALOR ESPERADO.");
    }
    else {
        alert(`INFELIZMENTE NÃO ATINGIU O VALOR NECESSÁRIO COM ISSO NECESSÁRIO PAGAR A MULTA DE 10% QUE FICA NO VALOR ATUALIZADO DE ${somaMulta}`);
    }
}""