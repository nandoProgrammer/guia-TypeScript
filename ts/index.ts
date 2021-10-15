//Funções
function sum(a: number, b: number){
    return a + b;
};





//Interfaces
interface Programador {
  
   nome: string;
   nivel: 'júnior' | 'pleno' | 'senior';
   tecnologias: string;
   idade: number;

};

interface Area extends Programador {

    area: 'frontend' | 'backend' | 'fullstack'

};

const p1: Programador = {
   nome: 'João',
   nivel: 'júnior',
   tecnologias: 'HTML, CSS, JavaScript',
   idade: 18
};

const p2: Area = {
   nome: 'Josias',
   nivel: 'pleno',
   tecnologias: 'HTML, CSS, JavaScript, React.js, TypeScript, Node, Vue JS',
   idade: 25,
   area: 'frontend'
};




//types
interface BackEndPrecisa {
   database: string
};

interface FrontEndPrecisa {
   sass: boolean
};

type ProgramadorXp = BackEndPrecisa | FrontEndPrecisa; //pode ser & para juntar ao invés de |

const p3: ProgramadorXp = {
   database: 'MySql'
};



//Input
const input = document.getElementById('inputText') as HTMLInputElement;

input.addEventListener('input', (event) => {
   const i = event.currentTarget as HTMLInputElement;
   console.log(i.value);
})




