import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />

      </div>
      <button type="button" onClick={(() => props.shufflefriend(props.id))} class="btn btn-primary">
      Check
      </button>
    </div>
  );
}

export default FriendCard;
