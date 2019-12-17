import React from 'react'
import User from './User'
import ErrorBoundary from '../hoc/ErrorBoundary';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import { changeTitleAction, changeName } from '../../redux/actions/actions';

export const ChangeTitleHandlerContext = React.createContext(() => {});

const UserList = function(props) {

  const [isUsersListOpen, setUsersListOpen] = useState(false);

  useEffect(() => {
    console.log('useEffect without second parameter');
  });

  useEffect(() => {
    console.log('useEffect with empty second parameter');
  }, []);

  useEffect(() => {
    console.log('useEffect with title second parameter');
  }, [props.title, isUsersListOpen]);
   
      const changeTitleHandler = (newTitle) => {
        return () => {
          props.changeTitle(newTitle);
        }    
      }
    
      const toggleUsersListHandler = () => {
        setUsersListOpen(!isUsersListOpen);
      }

      const toHomeHandler = () => {
        props.history.push('/');
      } 
      
      let userList = null;
      if (isUsersListOpen) {
        userList = <div className="App">
                    {props.users.map((item, index) => {
                      return (
                        <ChangeTitleHandlerContext.Provider 
                          key={index} 
                          value={changeTitleHandler(item.name)}>
                          <ErrorBoundary>
                            <User
                              name={item.name} 
                              age={item.age}
                              index={index}
                              hobbies={item.hobbies}
                              {...props}
                            />
                          </ErrorBoundary>
                        </ChangeTitleHandlerContext.Provider>
                      )
                    })}
                  </div>
        }
    
      return (        
            <div>
              <div className="AppTitle">{props.title}</div>
              <button onClick={changeTitleHandler('Title changed')}>Change title</button>
              <button onClick={toggleUsersListHandler}>Toggle list</button>
              <button onClick={toHomeHandler}>To home</button>
              {userList}
            </div>
        );
}

function mapStateToProps(state) {
 return {
  users: state.userListReducer.users,
  title: state.userListReducer.title
 }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) => {return dispatch(changeTitleAction(title))},
    changeName: users => dispatch(changeName(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)