"use strict";
exports.__esModule = true;
//Funções
function sum(a, b) {
    return a + b;
}
;
;
;
var p1 = {
    nome: 'João',
    nivel: 'júnior',
    tecnologias: 'HTML, CSS, JavaScript',
    idade: 18
};
var p2 = {
    nome: 'Josias',
    nivel: 'pleno',
    tecnologias: 'HTML, CSS, JavaScript, React.js, TypeScript, Node, Vue JS',
    idade: 25,
    area: 'frontend'
};
;
;
var p3 = {
    database: 'MySql'
};
//Input
var input = document.getElementById('inputText');
input.addEventListener('input', function (event) {
    var i = event.currentTarget;
    console.log(i.value);
});
//Generic Types
function adicionaItemArray(arr, valor) {
    return arr.map(function () { return valor; });
}
adicionaItemArray([1, 2, 3], 1);
function veirficaSePossuiCargo(user) {
    if ('cargo' in user) {
        console.log(user.cargo);
    }
    else {
        console.log('não possui cargo');
    }
}
var admin = {
    name: 'Fernando',
    email: 'fernando@email.com',
    cargo: 'administrador'
};
veirficaSePossuiCargo(admin);
;
function VerificaAumentoFuncionario(funcionario) {
    if (funcionario.aumento) {
        console.log('vai ter aumento no salário!!');
    }
    else {
        console.log('não vai ter aumento no salário');
    }
}
var e1 = {
    name: 'João',
    idade: 20,
    salario: 2000
};
VerificaAumentoFuncionario(e1);
var Teste = {
    valor1: 'teste1',
    valor2: 'teste2',
    valor3: 'teste3'
};
//Importando biblioteca
var jquery_1 = require("jquery");
jquery_1["default"].fn.extend({
    minhaFuncao: function () {
        console.log('Hello World');
    }
});
jquery_1["default"]('body').minhaFuncao();
