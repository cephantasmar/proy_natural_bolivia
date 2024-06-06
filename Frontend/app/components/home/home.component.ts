import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  redirectToContacto() {
    this.router.navigate(['/contacto']);
  }

  redirectToERP() {
    this.router.navigate(['/ERP']);
  }
  redirectToDominio() {
    this.router.navigate(['/productos']);
  }
  redirectToPW() {
    this.router.navigate(['/PaginasWeb']);
  }
  redirectToQS() {
    this.router.navigate(['/somos']);
  }
}
