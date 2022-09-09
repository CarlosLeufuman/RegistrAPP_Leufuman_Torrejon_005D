import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.page.html',
  styleUrls: ['./registrodocente.page.scss'],
})
export class RegistrodocentePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

  docente={
    nombre:'',
    rut:'',
    email:'',
    materia:'',
    sede:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.docente);
  }

}
