(function () {
    console.log("Executando IIFE simples!");
  })();


(function(nome){
    console.log(`Olá ${nome}, esta é uma Immediately Invoked Function Expressions.`);
})("Maria");

(function (a,b){
    let soma  = a + b;

    console.log(`${a} + ${b} = ${soma}`);
})(5, 6)