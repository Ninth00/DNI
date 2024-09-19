

document.getElementById('dniForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var dniNumber = document.getElementById('dniNumber').value;
    var dniLetter = document.getElementById('dniLetter').value.toUpperCase();
    
    // Validar que el número de DNI esté en el rango permitido
    if (dniNumber < 0 || dniNumber > 99999999 || dniNumber.length < 1 || dniNumber.length > 8) {
        alert("El número de DNI proporcionado no es válido." + \n + "El formato es moyor que cero y menor que 99999999");
        return;
    }

    // Validar que la letra del DNI sea una sola letra y no esté vacía
    if (dniLetter.length > 1 || !isNaN(dniLetter)) {
        alert("La letra del DNI no es válida. Debe ser una letra.");
        return;
    }

    // Calcular la letra correcta
    var letraCalculada = letras[dniNumber % 23];

    // Comparar con la letra ingresada por el usuario
    if (letraCalculada !== dniLetter) {
        alert("La letra indicada no es correcta.");
    } else {
        alert("El número y la letra del DNI son correctos.");
    }
});
