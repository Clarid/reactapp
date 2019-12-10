import React from 'react';
import HobbiesList from './Hobbies/HobbiesList';

export default props => {
    return (
        <div>
            <h1>Detail info for {props.name}</h1>
            Age: {props.age}
            <h1>Hobbies</h1>
            <HobbiesList hobbies={props.hobbies}/>
        </div>
    )
}