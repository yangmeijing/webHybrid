import express from 'express';
import bodyParser from 'body-parser';//post需要解析body整个整体。
const app =express();
app.use(bodyParser.json());//解析body，并以json形式返回回来。
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
        ){}
}
class Bigcourse{
    constructor(
        public id:number,
        public images:string,
        public courseName:string,
        public text:string,
        public coursenum:number,
        public person:number
        ){}
}
const bigcourses=[
    new Bigcourse(1,
        "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(2,
        "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(3,
        "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(4,
        "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(5,
        "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(6,
        "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(7,
        "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(8,
        "http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(9,
        "http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(10,
        "http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(11,
        "http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
    new Bigcourse(12,
        "http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190",
        "Github 开源之旅视频课第一季--启程",
        "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
        14,
        3736),
]

class Person{
    constructor(
        public name:string,
        public like:number,
        public beliked:number){}
}
class Task{
    constructor(
        public id:number,
        public namenum:string,
        public endate:string,
        public name:string
    ){}
}
class Community{
    constructor(
                public id:number,
                public imgperson:string,
                public img:string,
                public name:string,
                public context:string,
                public person:string,
                public data:string,
                public readnum:number,
                public writenum:number
    ){}
}
const community=[
    new Community(1,
                "http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256",
                "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/RWcUSnA6qeiKBmf5KK96K9.jpg",
                "JavaScript event(事件对象）",
                "在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相",
                "刘梦怡",
                "2018-10-03 19:09",
                37,
                0),
    new Community(2,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
        "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解",
        "3-张馨元",
        "2018-10-03 19:09",
        37,
        0),
    new Community(3,
        "http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",
        "数据结构--线性表的经典应用",
        "1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，",
        "杨伟斌",
        "2018-10-03 19:09",
        37,
        23), 
    new Community(4,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
        "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解",
        "3-张馨元",
        "2018-10-03 19:09",
        37,
        0), 
    new Community(5,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
        "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解",
        "3-张馨元",
        "2018-10-03 19:09",
        37,
        0), 
    new Community(6,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
        "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解",
        "3-张馨元",
        "2018-10-03 19:09",
        37,
        0), 
    new Community(7,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/120/h/120",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
        "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解",
        "3-张馨元",
        "2018-10-03 19:09",
        37,
        0),   

]
const courses=[
    new Course(1,'2016级混合应用开发',
                'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(2,'2018级信息素养实践',
                'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130',
                23,
                100),
    new Course(3,'2017级web开发（二）',
                'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130',
                3,
                91),
    new Course(4,'2016级测试方向',
                'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130',
                5,
                99),
    new Course(5,'2016级HTML5与CSS3前端开发',
                'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(6,'2017级3、4班软件测试基础',
              'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130',
               10,
               90),
    new Course(7,'2018级计算机导论',
              'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130',
               10,
                90),           
    new Course(8,'2017级数据结构',
              'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(9,'软件学院2018级新生训练营',
               'http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(10,'2017级coding暑期训练营',
                'http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(11,'软件过程',
                'http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130',
                10,
                90),
    new Course(12,'2016级JavaScript进阶',
                'http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130',
                 10,
                 90),                           
]

const person=new Person('杨美静',1,1);

const task=[
    new Task(-1,"任务五canvas",'将于2018-11-10晚8:00截止',"2016级HTML5与CSS3前端开发"),
    new Task(0,"任务二--js基础练习与应用",'已截止',"2016级混合应用开发"),
    new Task(0,"任务四 文件与拖放",'已截止',"2016级HTML5与CSS3前端开发"),
    new Task(1,"任务二十三",'已截止',"JavaScript进阶（2016级H5方向基础课）"),
    new Task(1,"任务二十二",'已截止',"JavaScript进阶（2016级H5方向基础课）")
]
const topic=["2015级程序设计基础","2015级面向对象程序设计基础","cms模板制作","数据结构","数据库原理","数据库原理（5,6班）","2014级PHP程序制作","web开发（二）","数据库卡系统概论程序设计","web开发二"];
app.get('/api/home/task',(req,res)=>{
    res.json(task);
})
// app.get('/api/home/task/taskdd/:id',(req,res)=>{
//     res.json(task.find((ele)=>ele.id==req.params.id));
// })

app.get('/api/home',(req,res)=>{
    res.json(person);
})


app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})

app.get('/api/shequ',(req,res)=>{
    res.json(community);
})
app.get('/api/topic',(req,res)=>{
    res.json(topic);
})
app.get('/api/bigcourse',(req,res)=>{
    res.json(bigcourses);
})
app.get('/api/bigcourses/:id',(req,res)=>{
    res.json(bigcourses.find((ele)=>ele.id==req.params.id));
})


app.listen(8080);