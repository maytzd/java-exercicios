
// priemrio exercicio 

function iniciar1(){
    alert("SEJA BEM-VINDO AO HOPPY HAPPY \n \n                 CLIQUE EM OK PARA COMEÇAR")

    let informaçõesUso = prompt("\n REGRAS PARA ENTRAR NO BRINQUEDO: \nNecessário ter 1,5m para entrar nesse brinquedo. \nInfome sua altura, por gentileza: \n \nNo lugar da virgula(,) utilize o ponto(.) \nEx.: 1.2 (DESSA FORMA ESTÁ CORRETO ✔) \n      1,2(DESSA FORMA ESTÁ ERRADO ❌)");

    let alturaCorreta = ("1.5");

    if( informaçõesUso >= alturaCorreta){
        alert("PODE ENTRAR ✅");
    }
    else {
        alert("\n             INFELIZMENTE VOCÊ NÃO PODE ENTRAR 😭 \n \nPORÉM NÃO FIQUE TRISTE TEMOS OUTROS BRINQUEDOS PELO PARQUE PARA VOCÊ SE DIVERTIR.");
    }

}

function iniciar2(){
    alert("               AGORA VAMOS PARA O SEGUNDO SISTEMA \n \n                       CLIQUE EM OK PARA COMEÇAR");

    let produtos = prompt("INFORME O NOME DO PRODUTO QUE GOSTARIA DE VERIFICAR:");

    let informações = Number (prompt("AGORA, INFORME A QUANTIDADE DE PRODUTOS EM SEU ESTOQUE NESSE MOMENTO:"));

    let minimo = 5;

    if( informações >= minimo){
        alert(`No momento o estoque de ${produtos} está ok, fique despreocupado(a) por enquanto😊😊`);
    }
    else {
        alert(`No momento o estoque de ${produtos} está A BAIXO do esperado, recomendado que FAÇA A SOLICITÇÃO de mais MERCADORIAS o mais breve possível, para que não fique sem estoque 👍😉😉`);
    }

}
