function somar () {
    const x = Number (document.getElementById ("x").value);
    const y = Number (document.getElementById ("y").value);
    let resultado = x+y;
    alert(resultado);
}

function multiplica () {
    let x = Number  (document.getElementById ("x_quadrado").value );
    let resultado = x ** 2 ;
    alert(resultado);
}

function ChamarAlerta () {
    let nome = document.getElementById("x_nome").value;
    document.getElementById ("MeuNome").innerHTML = "Seja Bem vindo:   "  + nome;   
    
}   

function Adicionando () {
    const x = Number (document.getElementById ("xOP").value);
    const y = Number (document.getElementById ("yOP").value);
    let resultado = x+y;
    alert(resultado);
}
function Subtraindo () {

    const x = Number (document.getElementById ("xOP").value);
    const y = Number (document.getElementById ("yOP").value);
    let resultado = x-y;
    alert(resultado);
}
function Multiplicando () {

    const x = Number (document.getElementById ("xOP").value);
    const y = Number (document.getElementById ("yOP").value);
    let resultado = x*y;
    alert(resultado);
}
function Dividindo () {

    const x = Number (document.getElementById ("xOP").value);
    const y = Number (document.getElementById ("yOP").value);
    let resultado = x / y;
    alert(resultado);
}

function x () {
    const Idade = new Date (document.getElementById ("Idade").value);
    const data = 2030;
    let resultado = data-Idade.getFullYear() ;
    alert(resultado);
   
}