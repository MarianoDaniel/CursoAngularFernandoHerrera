/**Genéricos */

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7]);
let soyString = queTipoSoy("Hola mundo");
let soyNumero = queTipoSoy(100);

let soyExplicito = queTipoSoy<number>(100);