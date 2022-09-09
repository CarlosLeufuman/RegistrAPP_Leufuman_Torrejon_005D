import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

  usuario={
    nombre:'',
    rut:'',
    email:'',
    carrera:'',
    sede:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }

}
