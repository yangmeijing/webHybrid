import React, { Component } from 'react';
import store from './store';
console.log(store.getState());
//store连接action和Reducer的一个对象
//action是一个对象，描述state的变化
//Reducer定义了如何去响应action描述的state的变化，并发送到store
class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action = {type:'ADD',value:10};
        store.dispatch(action);//此方法用于更新 state
        console.log(store.getState());
    }
    handleDel=()=>{
        let action = {type:'DEC'};
        store.dispatch(action);
    }
    handleAddOdd=()=>{
        let action = {type:'AddOdd'};
        store.dispatch(action);
    }
    handleAddAsync=()=>{
        let action = {type:'AddAsync'};
        setTimeout(function(){
            store.dispatch(action);
        },1000);
    }

    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br/>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleDel}>-</button>
                    <br/>
                    <button onClick={this.handleAddOdd}>Increment if odd</button>
                    <button onClick={this.handleAddAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
