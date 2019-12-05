import React from 'react';
import MyFragment from '../../hoc/MyFragment';

export default (props) => {
    return (
        <MyFragment>
            <span>{props.name}</span>
            <span>since {props.year}</span><br/>
        </MyFragment>
    )
}