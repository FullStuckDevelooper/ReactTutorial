import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/images/header-bg.jpg";

//reusable
import Services from "../Common/Services";
import Portofolio from "../Common/Portofolio";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Hello"
          subtitle="Seno"
          buttonText="Holla"
          link="/about"
          showButton={true}
          image={image}
        />

        <Services />
        <Portofolio />
      </div>
    );
  }
}

export default Home;
