import React from 'react'
import classes from './User.css'

class User extends React.Component {
    render() {
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
            <div className={classes.User}>
                <div>{this.props.name}</div>
                <div>Year: {this.props.age}</div>
                <input className={inputClasses.join(' ')} onChange={this.props.onChangeName} type="text" value={this.props.name}/>
                <button onClick={this.props.onChangeTitle}>Change Title</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default User