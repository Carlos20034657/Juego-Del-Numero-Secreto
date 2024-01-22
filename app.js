let NumeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let NumMax = 10;
console.log(NumMax);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //Forma de conectar el JS con el HTML, donde el query selector es para seleccionar donde vas a trabajar
    elementoHTML.innerHTML = texto; //con innerHTML mandas llamar la variable para asignarle un texto
    return;
}
function VerificarIntento(){
    let NumUsuario = parseInt(document.getElementById('ValorUsuario').value);
    //console.log(intentos);
    if(NumUsuario === NumeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    //el usuario no acerto
        if(NumUsuario > NumeroSecreto){
            asignarTextoElemento('p','El Numero secreto es Menor');
        }else{
            asignarTextoElemento('p','El Numero secreto es Mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
    document.querySelector('#ValorUsuario').value = '';
    
}

function GenerarNumSecreto() {
    let NumeroGen = Math.floor(Math.random()*NumMax)+1;

    //console.log(NumeroGen);
    //console.log(listaNumSorteados);
    //Si ya salieron todos los Num
    if (listaNumSorteados.length == NumMax){
        asignarTextoElemento('p','Ya se sortearon todos los Numeros Posibles');
    }else{
        //Si el N° generado esta incluido en la lista
        if(listaNumSorteados.includes(NumeroGen)){
            return GenerarNumSecreto();
        }else{
            listaNumSorteados.push(NumeroGen);
            return NumeroGen;
        }
    }
}

function CondicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${NumMax}`);
    NumeroSecreto = GenerarNumSecreto();
    intentos = 1
}
function ReiniciarJuego() {
    //Limpia la Caja
    LimpiarCaja();
    //Regresar a condiciones Iniciales
    CondicionesIniciales();
    //Deshabilitar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

CondicionesIniciales();