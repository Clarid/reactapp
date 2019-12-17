import React, {useRef, useEffect} from 'react'
import classes from './User.css'
import HobbiesList from './Hobbies/HobbiesList';
import addClass from '../hoc/addClass';
import MyFragment from '../hoc/MyFragment';
import {connect} from 'react-redux'
import { changeUserName, deleteUser } from '../../redux/actions/actions';

const User = (props) => {
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const detailInfoHandler = (username) => {
        return () => {
            props.history.push(`/users/${username}`);
        }
    }

    
    const inputClasses = [];
    if (!props.name.length) {
        inputClasses.push(classes.red);
    } else {
        inputClasses.push(classes.green);
    }

    if (props.name.length > 4) {
        inputClasses.push(classes.italic);
    }

    return (
        <MyFragment>
            <div /*onClick={this.detailInfoHandler(this.props.name)}*/>{props.name}</div>
            <div>Year: {props.age}</div>
            <input 
                className={inputClasses.join(' ')} 
                onChange={e => props.onChangeName(e.target.value, props.index)} 
                type="text" 
                value={props.name}
                ref={nameRef}
            />
            <HobbiesList hobbies={props.hobbies}
            />
            <button onClick={() => props.deleteUser(props.index)}>Delete</button>
        </MyFragment>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeName: (name, index) => dispatch(changeUserName(name, index)),
        deleteUser: index => dispatch(deleteUser(index))
    }
}

export default connect(null, mapDispatchToProps)(addClass(User, classes.User))