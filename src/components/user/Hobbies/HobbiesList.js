import React from 'react';
import Hobby from './Hobby';
import {ChangeTitleHandlerContext} from '../../../App';

export default (props) => {
    return (
        <ChangeTitleHandlerContext.Consumer>
            {onChangeTitle => (
                <div>
                    {props.hobbies.map((item, index) => {
                        return (
                            <Hobby key={index} name={item.name} year={item.year} />
                        )
                    })}
                    <button onClick={onChangeTitle}>Change Title</button>
                </div>
            )}            
        </ChangeTitleHandlerContext.Consumer>
    )
}