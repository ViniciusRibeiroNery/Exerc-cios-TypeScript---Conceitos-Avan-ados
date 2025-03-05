/* Criando interface de Estudante e Trabalhador */

interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

/* Criando um type que junta os dois */
type EstudanteTrabalhador = Estudante & Trabalhador;

/* Criando um objeto para EstudanteTrabalhador */
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "André",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "Tech Nova",
    cargo: "Desenvolvedor Júnior"
};

console.log("Estudante Trabalhador: ", estudanteTrabalhador);