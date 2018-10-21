import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule} from "@angular/core";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { CourseComponent } from './components/course/course.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';

import { RouterModule } from '@angular/router';//1.引入

import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { TalkdetailComponent } from './components/talkdetail/talkdetail.component';
import { NoticedetailComponent } from './components/noticedetail/noticedetail.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShequComponent,
    CourseComponent,
    TongbuComponent,
    TongbudetailComponent,
    HeaderComponent,
    TaskdetailComponent,
    CoursedetailComponent,
    TalkdetailComponent,
    NoticedetailComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    RouterModule.forRoot( [//2.路由执行是从上向下的，通配符路由必须写到最后，什么都匹配不到就匹配它。
      { path: 'home', component: HomeComponent,children:[
        {path:'task',component:TaskComponent,children:[
            {path:'taskdd/:taskId',component:TaskdetailComponent}
        ]},
        {path:'course',component:CourseComponent},
        {path:'talkdetail',component:TalkdetailComponent},
        {path:'tongbu',component:TongbuComponent},
        {path:'noticedetail',component:NoticedetailComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
      ] }, 
      { path: 'tongbu', component: TongbuComponent }, 
      { path: 'tongbu/:courseId', component: TongbudetailComponent }, 
      { path: 'course', component: CourseComponent },
      { path: 'course/:id', component: CoursedetailComponent }, 
      { path: 'shequ', component: ShequComponent }, 
      { path: '',redirectTo:"home/task",pathMatch:"full"  }, 
      { path: '**', component:HomeComponent},
] ),

  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
