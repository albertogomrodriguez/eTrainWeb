import { Component } from '@angular/core';

@Component({
  selector: 'form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css'],
})
export class FormContactoComponent {
  public nombre: string;
  public correo: string;
  public mensaje: string;

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
    });
  }
}
