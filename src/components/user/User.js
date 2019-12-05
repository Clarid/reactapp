import React from 'react'
import classes from './User.css'
import HobbiesList from './Hobbies/HobbiesList';
import addClass from '../hoc/addClass';
import MyFragment from '../hoc/MyFragment';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.nameRef = React.createRef();
        console.log('constructor');
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        if (this.props.index === 1) {
            // this.nameRef.focus();
            this.nameRef.current.focus();
        }
        console.log('componentDidMount');
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps',
    //                 this.props, nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',
        this.props, nextProps, this.state, nextState);
        if (this.props.name.trim() === nextProps.name.trim()) {
            return false;
        }
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate',
    //     this.props, nextProps, this.state, nextState);
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    static getDerivedStateFromProps(nextProps, previousState) {
        console.log('getDerivedStateFromProps');
        return previousState;
    }

    render() {
        console.log('render');
        // if (Math.random() > 0.7) {
        //     throw new Error('Random Error');
        // }
        const inputClasses = [];
        if (!this.props.name.length) {
            inputClasses.push(classes.red);
        } else {
            inputClasses.push(classes.green);
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.italic);
        }

        return (
            <MyFragment>
                <div>{this.props.name}</div>
                <div>Year: {this.props.age}</div>
                <input 
                    className={inputClasses.join(' ')} 
                    onChange={this.props.onChangeName} 
                    type="text" 
                    value={this.props.name}
                    // ref={nameRef => this.nameRef = nameRef}
                    ref={this.nameRef}
                />
                <HobbiesList hobbies={this.props.hobbies}
                    // onChangeTitle={this.props.onChangeTitle}
                />
                {/* <button onClick={this.props.onChangeTitle}>Change Title</button> */}
                <button onClick={this.props.onDelete}>Delete</button>
            </MyFragment>
        )
    }
}

export default addClass(User, classes.User)