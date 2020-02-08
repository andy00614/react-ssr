import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Home = (props) => {
  const state = useSelector(state => state);
  console.log(state)
  return (
    <div>
      <Header />
      <div>Home</div>
    </div>
  );
};

export default Home;
