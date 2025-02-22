/* Criando a interface genérica*/
interface Repositorio<T> {
    salvar(dado : T ) : void;
    obterTodos() : T[];
}

/* Criando a class para implementar os métodos de "salvar" e "obterTodos" */
class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[]{
        return this.usuarios;
    }
}

/* Criando uma interface para tipar os dados do usuário */
interface Usuario{
    nome: string;
    email: string;
}

/* passando os valores do dados dos Usuários */
const repositorio = new RepositorioUsuario();
repositorio.salvar({nome: "André", email:"andre123@gmail.com"});
repositorio.salvar({nome: "Junior", email:"junior123@gmail.com"});

/* Mensagem retornando o array com todos usuários */
console.log(repositorio.obterTodos());
