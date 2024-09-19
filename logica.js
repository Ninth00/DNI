

document.getElementById('dniForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var dniNumber = document.getElementById('dniNumber').value.trim();
    var dniLetter = document.getElementById('dniLetter').value.trim().toUpperCase();
    
    
    //Validar que el campo del número DNI no este vacio
    if(dniNumber ===""){
        alert("Por favor, ingresa un número de DNI.");
    //Validar que sea un numero, sin espacio(s) y no una letra(s) en el número de DNI
    }else if(isNaN(dniNumber)){
        alert("Por favor, ingresa un número, sin espacio(s), y/o carácteres especiales, y no letra(s).")
    // Validar que el número de DNI esté en el rango permitido
    }else if (dniNumber < 0 || dniNumber > 99999999) {
        alert("El número de DNI proporcionado no es válido." + "\n" +
            "Debe ser mayor que o igual a 0 y menor que o igual a 99999999."
        );
        return;
    }
    //Validar que sea un numero entero
    if(!Number.isInteger(dniNumber)){
    alert("Solo se permiten numeros enteros.\n" +
        "Por favor, introduce un número entero en un rango entre 0 y 99999999.")
        return;
    }
    //Validar que la letra del DNI no este vacía
    if(dniLetter === ""){
        alert("Por favor ingresa una letra de DNI.")
    // Validar que la letra del DNI sea una sola letra
    }else if (!isNaN(dniLetter) && dniLetter !=="") {
        alert("La letra del DNI no es válida. Debe ser una sola letra.");
        
    }else if (dniLetter.length !== 1){
        alert("Debe ser solo una letra de DNI")
        return;
    }

    // Calcular la letra correcta
    var letraCalculada = letras[dniNumber % 23];

    // Comparar con la letra ingresada por el usuario (Caso erroneo)
    if (letraCalculada !== dniLetter && dniLetter !=="" && !isNaN(dniNumber) && dniNumber> 0 && dniNumber < 99999999) {
        alert("La letra indicada no es correcta.");
        return;
    }
    // Comparar con la letra ingresada por el usuario (Caso correcto)
    if(letraCalculada == dniLetter && dniNumber !==""){
        alert("El número y la letra del DNI son correctos.");
        return;
    }
});

