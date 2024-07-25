import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/destinations" component={() => <div>Destinations</div>} />
            <Route path="/bookings" component={() => <div>Bookings</div>} />
            <Route path="/profile" component={() => <div>Profile</div>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
