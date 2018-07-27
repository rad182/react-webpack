import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Hello from './Hello';
import './App.css';

class App extends Component {
  hello = () => {
    return 'hello';
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.hello()}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hello" component={Hello} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
