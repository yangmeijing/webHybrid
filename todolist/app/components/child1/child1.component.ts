import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  txt:string;
  @Output() addI=new EventEmitter();

  addp(e){
    if(e.keyCode==13){
      this.addI.emit(this.txt);
      this.txt=""
    }
    
  }
  

}
