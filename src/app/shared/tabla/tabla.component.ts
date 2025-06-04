import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  fotografos = [
    { nombre: 'Mark', apellido: 'Otto', marcaCamara: 'Sony' },
    { nombre: 'Jacob', apellido: 'Thornton', marcaCamara: 'Canon' },
    { nombre: 'John', apellido: 'Doe', marcaCamara: 'Nikon' },
    { nombre: 'Goku', apellido: 'Son', marcaCamara: 'Kodak' }
  ];
}
