import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'BPage';
  // tab5Root = 'CPage';

  constructor(public modalCtrl:ModalController,public navCtrl:NavController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModel = this.modalCtrl.create(AddPage);
      profileModel.present();
    },false)
  }
}
