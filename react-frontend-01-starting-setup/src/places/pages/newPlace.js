import React from 'react';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input/Input';
import './newPlace.css';

const newPlace =(props) =>{
    return <div className="place-form"> 
        <Input element="input" type="text" label="Name" placeholder="Enter" validators={[VALIDATOR_REQUIRE()]} errorText="enter valid input"/>
    </div>
}

export default newPlace;