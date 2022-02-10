/**Encadenamiento Opcional */


interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: "fernando"
}

const pasajero2: Pasajero = {
    nombre: "melissa",
    hijos: ["Natalia", "Gabriel"]
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)