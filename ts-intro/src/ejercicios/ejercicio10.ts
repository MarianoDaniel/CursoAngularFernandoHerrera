/**Decoradores */
function classDecorator<T extends { new(...arg: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = "ASDASD"

    imprimir() {
        console.group("Hola mundo")
    }
}
console.log(MiSuperClase)

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)