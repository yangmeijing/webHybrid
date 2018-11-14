import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(1);
    let profileModal = this.modalCtrl.create(AddPage);
    profileModal.present();
  }

}
