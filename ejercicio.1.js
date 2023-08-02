/*
    Programa una función que cuente el número de caracteres de una cadena de texto, 
    Ej. miFuncion("Hola Mundo") devolverá 10.
    
    Probar en la consola de el navegador.
*/


const countChar = (text="") => (!text)
    ?console.warn("No ingresaste ninguna cadena")
    :console.info(`La cadena "${text}" tiene ${text.length} caracteres`);


countChar("holaa");

