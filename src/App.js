import React from 'react';
import './App.css';
import User from './components/user/User'
import ErrorBoundary from './components/hoc/ErrorBoundary';

export const ChangeTitleHandlerContext = React.createContext(() => {});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Alex',
          age: 22,
          hobbies: [
            {name: 'Playing the guitar', year: 2008},
            {name: 'Cooking', year: 2006}
          ]
        },
        {
          name: 'Max',
          age: 28,
          hobbies: [
            {name: 'Playing the guitar', year: 2010},
            {name: 'Reading books', year: 2003}
          ]
        },
        {
          name: 'Mariya',
          age: 30,
          hobbies: [
            {name: 'Reading books', year: 2001},
            {name: 'Cooking', year: 2006}
          ]
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
      // const users = [...this.state.users];
      // users.splice(index, 1);
      // this.setState({users});
      this.setState((previousState) => {
        const users = [...previousState.users];
        users.splice(index, 1);
        return {users};
      }, () => {
          console.log('state was changed');
      });
    }
  }

  render() {
    let userList = null;
    if (this.state.isUsersListOpen) {
      userList = <div className="App">
                  {this.state.users.map((item, index) => {
                    return (
                      <ChangeTitleHandlerContext.Provider 
                        key={index} 
                        value={this.changeTitleHandler(item.name)}>
                        <ErrorBoundary>
                          <User 
                            // onChangeTitle={this.changeTitleHandler(item.name)} 
                            name={item.name} 
                            age={item.age} 
                            onChangeName={this.changeNameHandler(index)}
                            onDelete={this.deleteUserHandler(index)}
                            index={index}
                            hobbies={item.hobbies}
                          />
                        </ErrorBoundary>
                      </ChangeTitleHandlerContext.Provider>
                    )
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
