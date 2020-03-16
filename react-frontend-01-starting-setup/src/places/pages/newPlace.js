import React from 'react';
import Input from '../../shared/components/FormElements/Input/Input';
import './newPlace.css';

const newPlace =(props) =>{
    return <div className="place-form"> 
        <Input element="input" type="text" label="Name" placeholder="Enter" />
    </div>
}

export default newPlace;