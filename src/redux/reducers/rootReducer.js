import userReducer from './userReducer';
import userListReducer from './userListReducer';
import {combineReducers} from 'redux';

const initialState = {
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
    title: 'Users'
}

export default combineReducers(
    {
        userReducer: userReducer(initialState), 
        userListReducer: userListReducer(initialState)
    }
);