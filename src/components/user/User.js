import React from 'react'
import './User.css'

class User extends React.Component {
    render() {
        return (
            <div className="User">
                <div>{this.props.name}</div>
                <div>Year: {this.props.age}</div>
                <input onChange={this.props.onChangeName} type="text" value={this.props.name}/>
                <button onClick={this.props.onChangeTitle}>Change Title</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default User