import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NaturalERPComponent } from './components/natural-erp/natural-erp.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';

import { HostingComponent } from './components/hosting/hosting.component';
import { DominiosComponent } from './components/dominios/dominios.component';


export const routes: Routes = [
    {path:"home", component:HomeComponent}, 
    {path:"contacto", component:ContactoComponent},
    {path:"ERP", component:NaturalERPComponent},
    {path:"servicios",component:ServiciosComponent, children:[{path:"hosting", component:HostingComponent},{path:"dominios", component:DominiosComponent}]},
    {path:"productos", component:ProductosComponent}];
