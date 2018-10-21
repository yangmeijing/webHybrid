import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  constructor(private http:HttpClient,private route: ActivatedRoute) { }
  taskId
  task
  ngOnInit() {
    this.taskId=this.route.snapshot.params['taskId'];
    this.http.get('/api/home/task/taskdd/'+this.taskId).subscribe((data)=>{
      this.task=data;
      
      console.log(data);
    })
  }
  ngDoCheck(): void {
    console.log(this.taskId);
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

}
