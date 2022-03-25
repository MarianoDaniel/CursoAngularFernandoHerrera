import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];
  heroeBorrado: string = "";
  borrarHeroe() {
    /* this.heroes.splice(0, 1) */
    /*shift() devuelve el último y lo borra de la lista  */
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
