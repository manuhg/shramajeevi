import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';
import PrivacyPolicy from './PrivacyPolicy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/farmtv_privacy_policy" component={PrivacyPolicy} />
        </Switch>
      </Router>
    );
  }
}

export default App;
