import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient) { }
  person;
  ngOnInit() {
    this.http.get('/api/home').subscribe(data=>{
      this.person=data;
    })
  }
  ngOnDestroy(){
  }
}
