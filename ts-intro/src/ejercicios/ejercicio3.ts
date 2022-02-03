/**Funciones Básicas */
function sumar(a: string, b: string): string {
    return a + b;
}
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}


const res = multiplicar(5, 0, 10)

const resultado = sumar("fernando", " herrera")

console.log(res)


/**Funciones con objetos como argumentos */

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp?: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje)
}
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('puntos de vida', this.pv)
    }
}

curar(nuevoPersonaje, 20)