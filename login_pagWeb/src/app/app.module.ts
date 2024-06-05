import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar AppRoutingModule correctamente
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginasWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de agregar AppRoutingModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
