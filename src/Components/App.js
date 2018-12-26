import React, { Component } from 'react';
import Header from './Header';
import Questions from './Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuiz from './AddQuiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header branding='Questions Quiz' />
          <div>
            <Switch>
              <Route exact path='/' component={Questions} />
              <Route exact path='/create' component={AddQuiz} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
