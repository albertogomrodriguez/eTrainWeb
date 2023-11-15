import { Component } from '@angular/core';

@Component({
  selector: 'app-div-desplegable',
  templateUrl: './div-desplegable.component.html',
  styleUrls: ['./div-desplegable.component.css'],
})
export class DivDesplegableComponent {
  public div1Desplegado: boolean = false;
  public div2Desplegado: boolean = false;
  public div3Desplegado: boolean = false;

  toggleDiv(divNumber: number) {
    if (divNumber === 1) {
      this.div1Desplegado = !this.div1Desplegado;
    } else if (divNumber === 2) {
      this.div2Desplegado = !this.div2Desplegado;
    } else if (divNumber === 3) {
      this.div3Desplegado = !this.div3Desplegado;
    }
  }
}
