/*Criando interface multiplicacao para tipar os valores dos numeros que devem ser multiplicados */

interface multiplicacao {
    (num1:number, num2: number): number;
}

/* Criando função para realizar a operação de multiplicação */
const multiplicar : multiplicacao = (num1, num2) => {
    return num1 * num2;
};

/* Passando os valores dos números */
const num1 = 5;
const num2 = 5;

/* Mensagem com valores que foram inseridos e resultado de multiplicação */
console.log(`O Valor de ${num1} multiplicado por ${num2} é Igual a ${multiplicar(num1,num2)}`);