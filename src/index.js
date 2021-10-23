import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name={Contacts[0].name}
      email={Contacts[0].email}
      phone={Contacts[0].phone}
      imgURL={Contacts[0].imgURL}
    />
    <App
      name={Contacts[1].name}
      email={Contacts[1].email}
      phone={Contacts[1].phone}
      imgURL={Contacts[1].imgURL}
    />
    <App
      name={Contacts[2].name}
      email={Contacts[2].email}
      phone={Contacts[2].phone}
      imgURL={Contacts[2].imgURL}
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
