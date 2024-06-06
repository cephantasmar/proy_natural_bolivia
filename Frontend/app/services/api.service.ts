import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IDominio } from '../models/dominio.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseURL = "https://api.apilayer.com/whois/query?domain=";
  private apiKey = "jtKKhkULxhze5k3XQYg79yRxW8nr9P5b";

  constructor(private _httpClient: HttpClient) { }

  public getDominioById(domainName: string): Observable<IDominio> {  
    const headers = new HttpHeaders().set("apikey", this.apiKey);
    return this._httpClient.get<IDominio>(`${this.baseURL}${domainName}`, { headers }).pipe(catchError((error: HttpErrorResponse) =>{
      let errorMessage= "";
      console.log(error);
      if(error.error instanceof ErrorEvent){
        errorMessage = `Error: ${error.error.message}`;

      }else{
        errorMessage=`${error.error.result}`;
      }
      return throwError(()=>errorMessage);
    }));
    
  }
}
