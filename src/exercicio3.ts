/* Função Generics que recebe um arrays sem tipar um valor e inverte as ordens do arrys
        .slice() = cria uma cópia do array para não modificar o array original.
        .reverse() = inverte a ordem de todos elementos da ordem do array (utilizado após os .slice() ele não altera o array original)
*/
function inverterArray<T>( inverterArray: T[]): T []{
    return inverterArray.slice().reverse();
}

/* Passando os elementos de arrays com números */
const numeros = [2002 ,2006, 2010, 2014];
const numerosInvertidos = inverterArray(numeros);

/* Passando uma mensagem com a lista original e a lista invertidas */
console.log(`Sua lista é ${numeros} invertendo os valores ela fica assim: ${numerosInvertidos}`);


/* Passando os elementos de arrays com Strings */
const nomes = ["Ana" ,"André", "Anderson", "Zico"];
const nomesInvertidos = inverterArray(nomes);

/* Passando uma mensagem com a lista original e a lista invertidas */
console.log(`Sua lista é ${nomes} invertendo os valores ela fica assim: ${nomesInvertidos}`);