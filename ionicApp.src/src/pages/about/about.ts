import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  active=0;
  arr=["客厅",'卧室','餐厅','书房','门厅'];
  isActive(idx){
    this.active=idx;
  }
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
}
