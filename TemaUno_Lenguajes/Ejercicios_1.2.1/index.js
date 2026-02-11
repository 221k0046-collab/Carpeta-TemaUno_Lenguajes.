let x = 5;
let y = 6;
let z = x + y;
console.log(x);


// String
let nombre = "María";
console.log(nombre);

// Number
let edad = 25;
console.log(edad);

// Boolean
let esEstudiante = true;
console.log(esEstudiante);



// Object
let persona = {nombre: "Carlos", edad: 30};
console.log(persona);

// Array
let numeros = [1, 2, 3];
console.log(numeros);






// b. Diferentes tipos de datos
let texto = "JavaScript";
let numero = 100;
let decimal = 3.14;
let booleano = false;
let indefinido;
let nulo = null;
let objeto = {lenguaje: "JS"};
let lista = [10, 20, 30];

console.log(texto);
console.log(numero);
console.log(decimal);
console.log(booleano);
console.log(indefinido);
console.log(nulo);
console.log(objeto);
console.log(lista);

// c. Array mixto
let datos = ["Texto", 99, true, {x: 5}, [7, 8]];
console.log(datos);


// Función polinómica: ax² + bx
function polinomio(a, b) {
    let resultado = a * a + b;
    console.log(resultado);
    return resultado;
}

polinomio(3, 5); // 3² + 5 = 14
polinomio(4, 2); // 4² + 2 = 18

// Función flecha con manipulación de cadenas
const mostrarTexto = (texto) => {
    console.log(texto.toUpperCase());
};

mostrarTexto("hola fran"); 

// Bucle descendente
function numerosDescendentes() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

numerosDescendentes();


// Objeto institución
const universidad = {
    nombre: "Universidad Nacional",
    ciudad: "Madrid",
    estudiantes: 15000,
    fundacion: 1990,
    tipo: "Pública"
};

console.log(universidad);


// Objeto con método
const universida = {
    nombre: "Universidad Nacional",
    ciudad: "Madrid",
    estudiantes: 15000,
    
    descripcion: function() {
        console.log(`${this.nombre} está en ${this.ciudad} con ${this.estudiantes} estudiantes`);
    }
};

universida.descripcion();


