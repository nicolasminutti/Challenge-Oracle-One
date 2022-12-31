const diccionario = {                                               //Creo una CONSTANTE diccionario con letra => valor.
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

document.getElementById('btnCopiar').style.visibility = 'hidden'
document.getElementById('contenidoEncriptado').style.visibility = 'hidden'

function encriptar() {
    var frase = document.getElementById('textoUsuario').value
    if (frase == '' || validar(frase) !== null) {
        alert('Cadena vacia o se encontró en el texto letras acentúadas o mayúsculas')
    } else {
        textoEncriptado = encripta(frase)
        if (document.getElementById('contenidoInicio')) {
            document.getElementById('contenidoInicio').remove()
            document.getElementById('contenidoEncriptado').innerHTML = ''
        }
        document.getElementById('contenidoEncriptado').style.visibility = 'visible' 
        document.getElementById('contenidoEncriptado').innerHTML = textoEncriptado
        document.getElementById('btnCopiar').style.visibility = 'visible'
    }     
}

function desencriptar() {
    var frase = document.getElementById('textoUsuario').value
    if (frase == '' || validar(frase) !== null) {
        alert('Cadena vacia o se encontró en el texto letras acentúadas o mayúsculas')
    } else {
        textoDesencriptado = desencripta(frase)
        if (document.getElementById('contenidoInicio')) {
            document.getElementById('contenidoInicio').remove()
            document.getElementById('contenidoEncriptado').style.visibility = 'visible'
            document.getElementById('contenidoEncriptado').innerHTML = ''
        }
        document.getElementById('contenidoEncriptado').innerHTML = ''
        document.getElementById('contenidoEncriptado').innerHTML = textoDesencriptado
    } 
}

function validar(frase) {
    const regex = /[^a-zñü\s]/g                                     //Constante REGEX, solo acepta minúsculas, espacios, letra ñ y letra ü
    return frase.match(regex)
}

function encripta(frase) {
    Object.keys(diccionario).forEach((key) => {                     //Recorro la frase y reemplazo el valor por su consecuente en diccionario
        frase = frase.replaceAll(key, diccionario[key])
    })
    return (frase)
}

function desencripta(frase) {
    Object.keys(diccionario).forEach((key) => {                     //Recorro la frase y reemplazo el valor por su consecuente en diccionario de forma reversa
        frase = frase.replaceAll(diccionario[key], key)
    })
    return (frase)
}

function copiarAlPortapapeles() {
    var range = document.createRange()
    range.selectNode(document.getElementById('contenidoEncriptado'))
    window.getSelection().removeAllRanges()          
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
    document.getElementById('textoUsuario').value = ''
}