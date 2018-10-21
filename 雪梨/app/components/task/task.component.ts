import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
  tasks;
  num=-1;
  change(event){
    this.num=event.target.id;
  }
  ngOnInit() {
    this.http.get("/api/home/task").subscribe(data=>{
        this.tasks=data;
    })
  }

}
