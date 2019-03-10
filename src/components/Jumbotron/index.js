import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div id="jumbo" class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-2">Choose your Pokemon!</h1>
                <p class="lead" stlye="align-content=center">Can not choose twice.</p>
            </div>
        </div>

    );
}

export default Jumbotron;