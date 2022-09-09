import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tiporegistro',
  templateUrl: './tiporegistro.page.html',
  styleUrls: ['./tiporegistro.page.scss'],
})
export class TiporegistroPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

}
