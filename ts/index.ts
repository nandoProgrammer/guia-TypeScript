//Funções
function sum(a: number, b: number){
    return a + b;
};





//Interfaces
interface IProgramador {
  
   nome: string;
   nivel: 'júnior' | 'pleno' | 'senior';
   tecnologias: string;
   idade: number;

};

interface IArea extends IProgramador {

    area: 'frontend' | 'backend' | 'fullstack'

};

const p1: IProgramador = {
   nome: 'João',
   nivel: 'júnior',
   tecnologias: 'HTML, CSS, JavaScript',
   idade: 18
};

const p2: IArea = {
   nome: 'Josias',
   nivel: 'pleno',
   tecnologias: 'HTML, CSS, JavaScript, React.js, TypeScript, Node, Vue JS',
   idade: 25,
   area: 'frontend'
};





//types
interface IBackEndPrecisa {
   database: string
};

interface IFrontEndPrecisa {
   sass: boolean
};

type ProgramadorXp = IBackEndPrecisa | IFrontEndPrecisa; //pode ser & para juntar ao invés de |

const p3: ProgramadorXp = {
   database: 'MySql'
};





//Input
const input = document.getElementById('inputText') as HTMLInputElement;

input.addEventListener('input', (event) => {
   const i = event.currentTarget as HTMLInputElement;
   console.log(i.value);
})




//Generic Types
function adicionaItemArray<T>(arr: any[], valor: T){
   return arr.map(() => valor);
}

adicionaItemArray([1, 2, 3], 1);



//Condicionais
interface IUser {
   name: string;
   email: string;
}

interface ICargo extends IUser{
   cargo: 'administrador' | 'sub-administrador'
}

function veirficaSePossuiCargo(user: IUser | ICargo){
   if('cargo' in user){
     console.log(user.cargo);
   }else{
     console.log('não possui cargo');
   }
}

const admin: ICargo = {
   name: 'Fernando',
   email: 'fernando@email.com',
   cargo: 'administrador'
};

veirficaSePossuiCargo(admin);



interface IEmpregados {
   name: string,
   idade: number,
   salario: number,
   aumento?: number
};

function VerificaAumentoFuncionario(funcionario: IEmpregados){
   if(funcionario.aumento){
      console.log('vai ter aumento no salário!!');
   }else{
      console.log('não vai ter aumento no salário');
   }
}

const e1 : IEmpregados = {
   name: 'João',
   idade: 20,
   salario: 2000
};

VerificaAumentoFuncionario(e1);





interface IPessoa {
   readonly nome: string,
   readonly idade: number,
   readonly todo?: string
}


type PessoaSomenteLeitura = {
   readonly [K in keyof IPessoa]-?: IPessoa[K];
}


/*class Eu implements IPessoa{
   nome;
   idade;

   constructor(nome, idade){
       this.nome;
       this.idade;
   }
}*

const pessoaEu = new Eu('Fernando', 20);
*/



//Soma de Interfaces
interface ITeste{
   valor1: string,
   valor2: string,
}

interface ITeste{
   valor3: string
}

const Teste = {
   valor1: 'teste1',
   valor2: 'teste2',
   valor3: 'teste3'
}





//Importando biblioteca
import $ from 'jquery'

$.fn.extend({
   minhaFuncao(){
      console.log('Hello World')
   }
})


interface JQuery{
   minhaFuncao(): void
}

$('body').minhaFuncao();