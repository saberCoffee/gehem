import './bootstrap';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Example from './components/Example';

if (document.getElementById('lambdaApp')) {
  class App extends Component {
    render() {
      return (
        <div className="container">
          Hey !
          <Example />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('lambdaApp'));
}