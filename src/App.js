import React, { Component } from 'react';
import './App.css';
import concerts from './data/concerts.json';
import users from './data/users.json';
import NavBar from './components/Banner';
import Profile from './components/Profile';
import Concerts from  './components/Concerts';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      concerts: concerts, 
      users: users
    };
  };

  handleBooking = (concert, count) => {
    debugger;
    const concerts = [...this.state.concerts];
    let look = concerts[0].concerts.filter((c)=>c.name === concert);
    if(look[0].available-count >=0) {
      look[0].available -= count;
      this.setState({concerts: concerts});
    } else {
      window.alert("Limit exceeded");
    }
  }

  render() { 
    return (
      <div>
        <NavBar header="Book your tickets"></NavBar>
        <div className="row">
          <div className="col-4"><Profile user={this.state.users[0].user1}/></div>
          <div className="col-8"> <Concerts concerts={this.state.concerts[0]} handleBooking={this.handleBooking}/></div>
        </div>
      </div>
    );
  }
}


export default App;