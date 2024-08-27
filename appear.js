// Función para manejar la visibilidad de elementos en función del ancho de la ventana
function handleVisibility() {
    if (window.innerWidth <= 768) {
        // Mostrar elementos para pantallas pequeñas
        document.querySelector('.copy').style.display = 'block'; // Mostrar el contenedor de copiar
        document.querySelector('.labelText').style.display = 'block'; // Mostrar la etiqueta de texto
        document.getElementById('buttonCopy').style.visibility = 'visible'; // Hacer visible el botón de copiar
        document.getElementById('labelText').style.visibility = 'visible'; // Hacer visible la etiqueta de texto

        // Ocultar el área central
        document.querySelector('.centralOut').style.display = 'none'; // Ocultar el área central
    } else {
        // Ajustes para pantallas grandes
        document.getElementById('buttonCopy').style.visibility = 'visible'; // Hacer visible el botón de copiar
        document.getElementById('labelText').style.visibility = 'visible'; // Hacer visible la etiqueta de texto
        document.querySelector('.centralOut').style.visibility = 'hidden'; // Ocultar el área central
    }
}

// Asignar la función de manejo de visibilidad al evento de clic del botón de encriptar
document.getElementById('buttonEncrypt').addEventListener('click', handleVisibility);

// Asignar la función de manejo de visibilidad al evento de clic del botón de desencriptar
document.getElementById('buttonDesencrypt').addEventListener('click', handleVisibility);
