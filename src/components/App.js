/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";
import Button from "./Button";
import Counter from "./counter/Counter";

let data = [
  {
    fullName: "Matt Smith",
    status: "Single friend",
    description: "Mathew is a Certified Space Cadet living in Roswell, NM.",
    totalFriends: 69.75,
    joinedYear: 2031,
    imageUrl:
      "https://images.pexels.com/photos/6454660/pexels-photo-6454660.jpeg?cs=srgb&dl=pexels-olha-ruskykh-6454660.jpg&fm=jpg",
  },
  {
    fullName: "Billy Smith",
    status: "Married friend",
    description: "Billy is a Certified Space Cadet living in Austin, TX.",
    totalFriends: 45,
    joinedYear: 2011,
    imageUrl:
      "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?cs=srgb&dl=pexels-cottonbro-5082976.jpg&fm=jpg",
  },
  {
    fullName: "Cindy Smith",
    status: "Undecided friend",
    description: "Cindy is a Certified Space Cadet living in Hollywood, CA.",
    totalFriends: 23,
    joinedYear: 2018,
    imageUrl:
      "https://images.pexels.com/photos/9818341/pexels-photo-9818341.jpeg?cs=srgb&dl=pexels-valera-evane-9818341.jpg&fm=jpg",
  },
  {
    fullName: "Jane Smith",
    status: "Divorced friend",
    description: "Jane is a Certified Space Cadet living in Portland, OR.",
    totalFriends: 48,
    joinedYear: 2021,
    imageUrl:
      "https://images.pexels.com/photos/5119522/pexels-photo-5119522.jpeg?cs=srgb&dl=pexels-cottonbro-5119522.jpg&fm=jpg",
  },
];

const App = (props) => {

  return (
    <>
      <Header background="black">
        <Logo>Billy's BBQ</Logo>
        <nav>
          <a href="/">
            Link
            <span style={{ color: "red" }}>?</span>
          </a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </nav>
      </Header>
      <main
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "960px",
          padding: "20px 20px",
        }}
      >
        <Counter/>
        <Button>Save</Button>
        {/* <div className="ui link cards">{printCards()}</div> */}
      </main>
    </>
  );
};

export default App;
