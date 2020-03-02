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
      user: users[0]
    };
  };

  handleBooking = (concert, count) => {
    const concerts = [...this.state.concerts];
    let look = concerts[0].concerts.filter((c)=>c.name === concert);
    if(look[0].available-count >=0) {
      look[0].available -= count;
      this.setState({concerts: concerts});
      let user = {...this.state.user};
      let exists = user.tickets.filter((e) => e.name === concert);
      debugger;
      if(exists.length === 0){
        user.tickets.push({
          name: concert,
          tickets: parseInt(count)
        });
      } else {
        exists[0].tickets += parseInt(count)
      }
            
      
      this.setState({user});
    } else {
      window.alert("Limit exceeded");
    }
  }

  render() { 
    return (
      <div className="container">
        <NavBar header="Book your tickets" user={this.state.user}></NavBar>
        <div className="row">
          <Profile user={this.state.user}/>
          <Concerts concerts={this.state.concerts[0]} handleBooking={this.handleBooking}/>
        </div>
      </div>
    );
  }
}


export default App;
