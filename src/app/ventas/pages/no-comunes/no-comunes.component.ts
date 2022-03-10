import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  clientes: string[] = ['María', 'Pedro','Juan','Marta','Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente(){
    if(this.nombre === 'Susana'){
      this.nombre = "Pablo";
      this.genero = "masculino";
    } else{
      this.nombre = "Susana";
      this.genero = "femenino";
    }
  }
  borrarCliente(){
    this.clientes.pop();
  }


  persona = {
    nombre: 'Carlos',
    edad: 28,
    direccion: 'Santander, Cantabria'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  miObservable = interval(5000);

  valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  } );


}
