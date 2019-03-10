import React, { Component } from "react";
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



  // this.state.score++;
  this.setState({friends,score: this.state.score + 1});

  friends.sort( () => Math.random() - 0.5);


  this.setState({topscore: this.state.score})

  if(this.className===true){
    this.setState({friends,score: 0});
    alert("You lose!")
  }
  else {
    this.setState({friends,score:this.state.score+1})
  }

  this.className=true

} 


// incstate = id => {
//   this.setState({clicked: this.state.clicked === true});
// }
// top score will increase as the  score increases
// push top score to an array

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List  Score:{this.state.score} Top Score: {this.state.topscore}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shufflefriend={this.shufflefriend}
            // incstate={this.incstate}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            className={friend.className}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
