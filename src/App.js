import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0, 
    
  };

 
shufflefriend = (id) => {

  this.setState({friends,score: this.state.score + 1});
  
  friends.sort( () => Math.random() - 0.5);
  
  if(this.className===true){
     
    alert("You lose!")
    
    if (this.score > this.topscore) {
      this.setState({topscore: this.state.score})
      this.setState({score: 0});
    }
    else {
      alert("You still need to beat your top score")
      this.setState({score: 0});
    }
    this.className = false
  }
  else {
    this.setState({friends,score:this.state.score+1})
    // this.className=true
  }

}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav>Score:{this.state.score} Top Score: {this.state.topscore}</Nav>
        <Jumbotron></Jumbotron>
        {this.state.friends.map(friend => (
          <FriendCard
            shufflefriend={this.shufflefriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            className={friend.className}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
