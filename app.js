// Limpiar el contenido del área editable al enfocarla
textEditable.addEventListener('focus', function() {
    textEditable.textContent = '';
});

// Función para encriptar el texto
function convertText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Encriptar el texto y actualizar la etiqueta cuando se haga clic en el botón de encriptar
buttonEncrypt.addEventListener('click', function() {
    labelText.textContent = convertText(textEditable.textContent);
});

// Desencriptar el texto y actualizar la etiqueta cuando se haga clic en el botón de desencriptar
buttonDesencrypt.addEventListener('click', function() {
    labelText.textContent = decryptText(textEditable.textContent);
});

// Copiar el texto de la etiqueta al portapapeles cuando se haga clic en el botón de copiar
buttonCopy.addEventListener('click', function() {
    navigator.clipboard.writeText(labelText.textContent)
        .then(() => console.log('Texto copiado con éxito'))
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('Hubo un error al intentar copiar el texto.');
        });
});