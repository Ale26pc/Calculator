function limpiar(){
document.getElementById(form).reset();
}
function sumar(){
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
const sumarflecha=()=>{document.getElementById('Resultado').innerHTML= (`La suma de ${a} y ${b} es: ${a+b}`)}
    sumarflecha()
}

function restar(){
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
const Restarflecha=()=>{document.getElementById('Resultado').innerHTML= (`La resta de ${a} y ${b} es: ${a-b}`)}
    Restarflecha()
}

function multiplicar(){
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
const multiplicarflecha=()=>{document.getElementById('Resultado').innerHTML= (`La multiplicación de ${a} y ${b} es: ${a*b}`)}
    multiplicarflecha()
}

function dividir(){
    var a = parseInt(document.getElementById('valor1').value);
    var b = parseInt(document.getElementById('valor2').value);
const dividirflecha=()=>{document.getElementById('Resultado').innerHTML= (`La división de ${a} y ${b} es: ${a/b}`)}
    dividirflecha()
}
