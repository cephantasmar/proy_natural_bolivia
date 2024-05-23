import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NaturalERPComponent } from './components/natural-erp/natural-erp.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';


export const routes: Routes = [
    {path:"home", component:HomeComponent}, 
    {path:"contacto", component:ContactoComponent},
    {path:"ERP", component:NaturalERPComponent},
    {path:"servicios",component:ServiciosComponent},
    {path:"productos", component:ProductosComponent}];
