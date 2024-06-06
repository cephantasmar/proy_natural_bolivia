import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { VpsComponent } from './vps/vps.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


//RUTAS DE NAVEGACION
const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  { path: 'planes', component: PlanesComponent },
  { path: 'vps', component: VpsComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
