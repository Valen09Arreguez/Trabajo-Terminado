const arrayNumero =[]
let acumulador = 0;
const btnAgregar = document.getElementById("btnAgregar");
const btnProcesar = document.getElementById("btnProcesar");
function agregarNumeroArray() {
    let numero = document.getElementById("numero");
    arrayNumero.push(Number(numero.value));
    numero.value = "";
    numero.focus();
}
function mostrarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML =""
    arrayNumero.forEach((elmento) => {
        lista.innerHTML += `
              <li>
              ${elmento}
              </li>`
})}
function sumatoria() {
    let auxiliar = 0
    arrayNumero.forEach(elemento =>{
        auxiliar = auxiliar + elemento;
    })
    acumulador = auxiliar;
    document.getElementById("sumatoria").innerText = "La sumatoria es: "+ auxiliar
}
function promedio(){
    let divisor = arrayNumero.length 
    let promedio = acumulador/divisor
    document.getElementById("promedio").innerText = "El promedio es: "+ promedio
}

function mayorNumero() {
    let primerNumero= arrayNumero[0]
    arrayNumero.forEach(elemento => {
        if(primerNumero<elemento){
            primerNumero = elemento
        }
    });
    document.getElementById("max").innerText = "El numero mayor es: "+ primerNumero 
}

function minimoNumero(params) {
    let primerNumero= arrayNumero[0]
    arrayNumero.forEach(elemento => {
        if(primerNumero>elemento){
            primerNumero = elemento
        }
    });
    document.getElementById("min").innerText = "El numero minimo es: "+ primerNumero 
}


btnAgregar.addEventListener("click", () =>{
    agregarNumeroArray();
    mostrarLista()  
})

btnProcesar.addEventListener("click", ()=>{
    sumatoria();
    promedio();
    minimoNumero();
    mayorNumero();
});