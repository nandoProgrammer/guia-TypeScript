function sum(a: number, b: number){
    return a + b;
}

interface Programador {
  
   nome: string;
   nivel: 'júnior' | 'pleno' | 'senior';
   tecnologias: string;
   idade: number;

}

interface Area extends Programador {

    area: 'frontend' | 'backend' | 'fullstack'

}


const p1: Programador = {
   nome: 'João',
   nivel: 'júnior',
   tecnologias: 'HTML, CSS, JavaScript',
   idade: 18
}

const p2: Area = {
   nome: 'Josias',
   nivel: 'pleno',
   tecnologias: 'HTML, CSS, JavaScript, React.js, TypeScript, Node, Vue JS',
   idade: 25,
   area: 'frontend'
}

