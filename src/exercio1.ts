/*Criando uma Interface(Estruturas que permitem definir contrato com objetos garantindo que possuamdeterminados atributos)*/

interface Carro {
    marca: string;
    modelo: String;
    ano: number;
    motor?: string;
}

/*passando as informações para os objetos */
const meuCarro1: Carro = {
    marca: "Toyota",
    modelo: "Paseo",
    ano: 1995,
    motor: "1.5"
}

const meuCarro2: Carro ={
    marca: "Toyota",
    modelo: "Supra",
    ano: 1995
}

/*Imprimindo as informções dos objetos*/
console.log(`O seu primeiro carro é um ${meuCarro1.marca} ${meuCarro1.modelo}, ano ${meuCarro1.ano}, motor ${meuCarro1.motor} e seu proximo carro será um ${meuCarro2.marca} ${meuCarro2.modelo}, ano ${meuCarro2.ano}!`)