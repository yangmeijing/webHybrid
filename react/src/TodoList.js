import React, { Component } from 'react';
import store from './store';

class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().todo.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        });//订阅
    }
    handleAdd=(e)=>{
        if(e.keyCode==13){
            store.dispatch({
                type:"add_item",
                value:e.target.value
            })
            e.target.value='';
        }
    }
    handleDel=(index)=>{
        store.dispatch({
            type:"del_item",
            value:index
    
    })
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type='text'/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(//箭头函数后面是小括号，意思是直接返回，大括号还要写return
                            <div>
                                <li key={index}>{item}<button onClick={()=>this.handleDel(index)}>删除</button></li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
