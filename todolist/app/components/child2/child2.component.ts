import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  @Input() arr1;
  @Input() arr2;

  @Output() delI=new EventEmitter();
  @Output() delO=new EventEmitter();
  @Output() chang1=new EventEmitter();
  @Output() chang2=new EventEmitter();

  del1(i){
    this.delI.emit(i);
  }
  del2(i){
    this.delO.emit(i);
  }
  chan1(i){
    this.chang1.emit(i);
  }
  chan2(i){
    this.chang2.emit(i);
  }
}
