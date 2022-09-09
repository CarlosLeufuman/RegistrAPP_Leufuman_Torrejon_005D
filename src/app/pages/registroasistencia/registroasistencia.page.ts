import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registroasistencia',
  templateUrl: './registroasistencia.page.html',
  styleUrls: ['./registroasistencia.page.scss'],
})
export class RegistroasistenciaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

}
