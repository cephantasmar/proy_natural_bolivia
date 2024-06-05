import { Routes } from '@angular/router';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';

export const routes: Routes = [
  { path: '', component: PaginasWebComponent }, // Ruta principal que carga el componente PaginasWeb
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a la ruta principal para cualquier ruta no definida
];
