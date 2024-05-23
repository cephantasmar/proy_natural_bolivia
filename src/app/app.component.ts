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
  
  title = 'proy_natural';
  recivirMensaje($event:string){
    console.log($event);
  }
  isMobileMenuOpen = false;

  habilitar() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  activar(){
    this.botond=this.boton;
  }
}
