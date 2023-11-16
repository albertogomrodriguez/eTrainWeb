import { Component } from '@angular/core';

@Component({
  selector: 'div-desplegable-asesoria',
  templateUrl: './div-desplegable-asesoria.component.html',
  styleUrls: ['./div-desplegable-asesoria.component.css'],
})
export class DivDesplegableComponent {
  public div1Desplegado: boolean = false;
  public div2Desplegado: boolean = false;
  public div3Desplegado: boolean = false;

  public div1FlechaAbajo: boolean = true;
  public div2FlechaAbajo: boolean = true;
  public div3FlechaAbajo: boolean = true;

  toggleDiv(divNumber: number) {
    if (divNumber === 1) {
      this.div1Desplegado = !this.div1Desplegado;
      this.div1FlechaAbajo = !this.div1FlechaAbajo;
    } else if (divNumber === 2) {
      this.div2Desplegado = !this.div2Desplegado;
      this.div2FlechaAbajo = !this.div2FlechaAbajo;
    } else if (divNumber === 3) {
      this.div3Desplegado = !this.div3Desplegado;
      this.div3FlechaAbajo = !this.div3FlechaAbajo;
    }
  }
}
