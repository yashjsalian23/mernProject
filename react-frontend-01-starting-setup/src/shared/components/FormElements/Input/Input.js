import React, { useReducer }from 'react';
import './Input.css';

const inputReducer = (state, action) => {
    switch(action.type){
        case "CHANGE": 
        return {
            value: action.val,
            isValid: true
        }

        default:
            return state;
    }
};


const Input = props => {

    const [inputState, dispatch] =  useReducer(inputReducer, {value: "" , isValid: false});

    const changeHandler = event => {
        dispatch({type: "CHANGE",  val: event.target.value})
    }

    const element = props.element === "input" ? 
    (<input id={props.id} type={props.type} placeholder={props.placeholder} value={inputState.value}/>) :
    (<textarea id={props.id} rows={props.rows || 4} value={inputState.value} />);
   
    return (<div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
        <label htmlFor={props.id} >{props.label}</label>
        {element}
    </div>);
};

export default Input;