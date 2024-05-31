import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  boton="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
  botond="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
  userOccupation:string="Developer";
  lista1="";
  title = 'proy_natural';
  desplegar=true;
  desplegar2=true;
  funcDesplegar(){
    this.desplegar=!this.desplegar;
    this.desplegar2=true;
  }

  funcDesplegar2(){
    this.desplegar2=!this.desplegar2;
    this.desplegar=true;
  }

  recivirMensaje($event:string){
    console.log($event);
  }
  isMobileMenuOpen = false;
  isMobileMenuOpen2 = false;

  isLista=false;

  habilitar() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  habilitar2() {
    this.isMobileMenuOpen2 = !this.isMobileMenuOpen2;
  }
  activar(){
    this.botond=this.boton;
  }
  mostrar(){
    this.isLista=!this.isLista;
  }
  
 
}
