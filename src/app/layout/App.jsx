import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import EventDashboard from '../../features/EventDashboard/EventDashboard'

class App extends Component {
  render() {
    return (
      <div>
				<h1>Hello World</h1>
				<EventDashboard />
      </div>
    );
  }
}

export default App;
