import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  id;
  course
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.http.get("/api/bigcourses/"+this.id).subscribe(data=>{
        this.course=data;
    })
  }

}
