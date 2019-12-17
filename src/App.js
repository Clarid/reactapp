import React from 'react';
import classes from './App.css';
import UserList from './components/user/UserList';
import About from './components/About';
import Home from './components/Home';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class App extends React.Component {

  state = {
    isLoggedIn: true
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName={classes.choosed} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={classes.choosed} 
              to={{pathname: '/users'}}>User list</NavLink>
            </li>
            <li>
              <NavLink exact
              activeClassName={classes.choosed} 
              to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>

        {/* <Route exact path="/" render={() => <h1>Home page 1</h1>} /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {this.state.isLoggedIn ? 
            <Route path="/users" component={UserList} /> : 
            null }
          <Route path="/about" component={About} />
          <Redirect to='/' />
          {/* <Route render={() => <h1>404 Page not found</h1>}></Route> */}
        </Switch>
      </div>
    )
  }
   
};

export default App;
