import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'Carlos';
  nombreUpper: string = 'CARLOS';
  nombreCompleto:string = 'caRloS mEstAs';

  fecha: Date = new Date();


}
