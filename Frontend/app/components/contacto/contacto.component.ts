import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre:string="";
  apellido:string="";
  empresa:string="";
  email:string="";
  celular:string="";
  mensaje:string="";

  to:string="naturalBolivia@gmail.com";
  subject:string="";
body: string ="";
  formMesage= new FormControl();
  
  sendEmail() {
    this.body=`
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Empresa: ${this.empresa}
    Email: ${this.email}
    Celular: ${this.celular}
    Mensaje: ${this.mensaje}
  `;
    const mailto = `mailto:${this.to}?subject=${this.subject}&body=${this.body}`;
    window.location.href = mailto;
    console.log(this.to);
    console.log(this.subject);
    console.log(this.body);
    
    
  }
}
