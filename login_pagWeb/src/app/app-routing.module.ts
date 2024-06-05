import { Routes } from '@angular/router';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/paginas-web', pathMatch: 'full' },
  { path: 'paginas-web', component: PaginasWebComponent },
  { path: 'login', component: LoginComponent },
];
