import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-asistenciaregistrada',
  templateUrl: './asistenciaregistrada.page.html',
  styleUrls: ['./asistenciaregistrada.page.scss'],
})
export class AsistenciaregistradaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }


}
