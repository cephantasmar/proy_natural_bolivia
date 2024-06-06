import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  EMPTY, catchError,  throwError } from 'rxjs';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  dominio: string = "";
  DominioInfo:IDominio | null = null;
  resultado$ !:IDominio;
  public errorMessage !: string;
  aux:boolean=false;
  router: any;
  constructor(private _apiservice:ApiService){}
  redirectToContacto() {
    this.router.navigate(['/contacto']);
  }
  mostrar="";
  buscarDominio() {
    console.log("llamado");
    if (this.dominio !== "") {
      this._apiservice.getDominioById(this.dominio).pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          if(this.errorMessage== "not found"){this.aux=false; this.mostrar="El nombre de domino esta disponible" }
          if(this.errorMessage== "error"){this.aux=false; this.mostrar="Error" }
          return EMPTY;
        })
      ).subscribe(response => {
        this.mostrar="El nombre de dominio esta ocupado";
        this.aux=true;
        this.DominioInfo = response;
        console.log(response);
      });
    } else {
      alert("Debes ingresar un dominio");
    }
  }
  
  
}
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { IDominio } from '../../models/dominio.model';
import { ApiService } from '../../services/api.service';

