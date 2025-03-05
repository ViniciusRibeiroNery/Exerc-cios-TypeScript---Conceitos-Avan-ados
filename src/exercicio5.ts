type RespostaServidor = string | boolean;

function processarResposta( resposta : RespostaServidor): void{
    if (typeof resposta === "string"){
        console.log(`Mensagem do servirdor: ${resposta}`);
    } else if (typeof resposta === "boolean"){
        console.log(resposta ? "Operação bem-sucedida!" :  "Operação falhou");
    }

}

processarResposta("tudo certo!");
processarResposta(true);
processarResposta(false);