/**Desestructuración de Objetos */

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
const autor = 'Fulano';

const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
//const { autor } = detalles;


/* console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es de: ', segundo)
console.log('La canción actual es de: ', cancion)
console.log('El autor es: ', autorDetalle) */

/**Desestructuración de Arreglos */

const dgz: string[] = ['Goku', 'Vegeta', 'Trunks']

//const [goku, vegeta, trunks] = dgz
const [, , trunks] = dgz

//console.log('Persinaje 1', goku)
//console.log('Persinaje 2', vegeta)
console.log('Persinaje 3', trunks)