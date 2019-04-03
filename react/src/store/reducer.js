import { combineReducers } from 'redux';

let counter = (state=12,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.value;
        case 'DEC':
            return state-1;
        case 'AddOdd':
            if(state%2==1){return state+1;}
            else{return state;}
        case 'AddAsync':
            return state+1;
        default:
        return state;
    }
}

let initValue={
    list:[1,2,3]
}
let todo = (state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1.list.push(action.value);
            return newState1;
        case 'del_item':
            console.log(state);
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value,1);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({ 
    counter, 
    todo
}) 

    