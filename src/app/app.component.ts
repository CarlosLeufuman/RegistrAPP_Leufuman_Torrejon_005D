import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[ 
    {
      icon: 'globe-outline',
      name:  'Inicio',
      redirecTo: '/inicio' 
    },
    {
      icon:'person-add-outline',
      name: 'Registrate', 
      redirecTo: '/tiporegistro'
    },
    {
      icon:'person-circle-outline',
      name: 'Iniciar Sesión', 
      redirecTo: '/login'
    },
    {
      icon: 'ribbon-outline',
      name:  'Docente',
      redirecTo: '/profesor' 
    },
    {
      icon: 'school-outline',
      name:  'Alumno',
      redirecTo: '/alumno' 
    },
    {
      icon: 'settings-outline',
      name:  'Configuración',
      redirecTo: '/configuracion' 
    },



  ];




}
