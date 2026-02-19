let numerosEvaluados = [];
let mayorNumero = -Infinity;

function evaluarNumero(num) {
    if (num < 0) return "Número negativo";
    else if (num >= 0 && num <= 10) return "Número pequeño";
    else if (num >= 11 && num <= 50) return "Número mediano";
    else if (num > 50) return "Número grande";
}

// Botón Evaluar
document.getElementById("btnEvaluar").onclick = function() {
    let valor = document.getElementById("numeroInput").value;
    let resultadoDiv = document.getElementById("resultado");
    
    // Validaciones
    if (valor === "") {
        resultadoDiv.innerHTML = "Por favor ingresa un número";
        return;
    }
    
    let numero = Number(valor);
    
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "Entrada no válida";
        return;
    }
    
    if (numero > 1000) {
        resultadoDiv.innerHTML = "Número demasiado alto";
        return;
    }
    
    // Evaluar número
    let resultado = evaluarNumero(numero);
    resultadoDiv.innerHTML = resultado;
    
    // Cambiar color
    if (resultado === "Número negativo") resultadoDiv.style.color = "red";
    else if (resultado === "Número pequeño") resultadoDiv.style.color = "blue";
    else if (resultado === "Número mediano") resultadoDiv.style.color = "orange";
    else if (resultado === "Número grande") resultadoDiv.style.color = "green";
    
    // Guardar en historial
    numerosEvaluados.push(numero);
    let li = document.createElement("li");
    li.innerHTML = numero;
    document.getElementById("historial").appendChild(li);
    
    // Actualizar contador
    document.getElementById("contador").innerHTML = numerosEvaluados.length;
    
    // Actualizar número mayor
    if (numero > mayorNumero) {
        mayorNumero = numero;
        document.getElementById("numeroMayor").innerHTML = mayorNumero;
    }
}

// Botón Limpiar
document.getElementById("btnLimpiar").onclick = function() {
    document.getElementById("numeroInput").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("historial").innerHTML = "";
    document.getElementById("contador").innerHTML = "0";
    document.getElementById("numeroMayor").innerHTML = "-";
    
    numerosEvaluados = [];
    mayorNumero = -Infinity;
}