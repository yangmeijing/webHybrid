import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';//让异步更可控、更简单

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  flag:boolean=true;
  num=3;
  object={a:2,c:"33"};
  date=new Date();

  change(event){
    this.num=event.target.value;
  }





  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
      this.course=data;
    })

    // this.course=this.http.get('/api/courses/'+this.courseId);
    //以下是练习Rxjs
    // this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{//对应拿到的数据data
    //   data.name="haha";
    //   return data;//(对应下面的data)
    // })).pipe(filter(data=>{
    //   return data.id==3;//为真继续往下走
    // })).subscribe((data)=>{
    //   console.log(data);
    //   this.course=data;
    // })
  }

}
