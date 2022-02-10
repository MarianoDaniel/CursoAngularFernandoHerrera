class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends PersonaNormal {

    /**Constructor de una clase, se ejecuta cuando creo una instancia de la calse */
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, "New York, USA")
    }


}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman)



