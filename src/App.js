import React from 'react';
import './App.css';
import User from './components/user/User'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Alex',
          age: 22
        },
        {
          name: 'Max',
          age: 28
        },
        {
          name: 'Mariya',
          age: 30
        }
      ],
      title: 'Users',
      isUsersListOpen: false
    }
  }

  changeTitleHandler = (newTitle) => {
    return () => {
      this.setState({title: newTitle});
    }    
  }

  toggleUsersListHandler = () => {
     this.setState({isUsersListOpen: !this.state.isUsersListOpen});
  }

  changeNameHandler = (index) => {
    return event => {
      const newName = event.target.value;
      const users = [...this.state.users];
      users[index].name = newName;
      this.setState({users});
    }
  }

  deleteUserHandler = (index) => {
    return () => {
      const users = [...this.state.users];
      users.splice(index, 1);
      this.setState({users});
    }
  }

  render() {
    let userList = null;
    if (this.state.isUsersListOpen) {
      userList = <div className="App">
                  {this.state.users.map((item, index) => {
                    return <User 
                      onChangeTitle={this.changeTitleHandler(item.name)} 
                      key={index} 
                      name={item.name} 
                      age={item.age} 
                      onChangeName={this.changeNameHandler(index)}
                      onDelete={this.deleteUserHandler(index)}
                      />
                  })}
                </div>
    }

    return (
      <div>
        <div className="AppTitle">{this.state.title}</div>
        <button onClick={this.changeTitleHandler('Title changed')}>Change title</button>
        <button onClick={this.toggleUsersListHandler}>Toggle list</button>
        {userList}
      </div>
    );
  }  
};

export default App;
