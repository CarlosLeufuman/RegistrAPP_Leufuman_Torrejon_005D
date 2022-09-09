import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

  sugerencia={
    nombre:'',
    rut:'',
    email:'',
    opinion:'',
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.sugerencia);
  }
}
