import React from "react";

function App(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">Beyonce</h2>
        <img className="circle-img" src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default App;
