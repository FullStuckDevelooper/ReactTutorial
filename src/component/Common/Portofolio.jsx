import React, { Component } from "react";
import PortofolioItem from "./PortofolioItem";
//img
import img1 from "../assets/images/portfolio/01-thumbnail.jpg";
import img2 from "../assets/images/portfolio/02-thumbnail.jpg";
import img3 from "../assets/images/portfolio/03-thumbnail.jpg";
import img4 from "../assets/images/portfolio/04-thumbnail.jpg";
import img5 from "../assets/images/portfolio/05-thumbnail.jpg";
import img6 from "../assets/images/portfolio/06-thumbnail.jpg";

const portofolio = [
  { tittle: "A", subtitle: "v", img: img1 },
  { tittle: "B", subtitle: "c", img: img2 },
  { tittle: "B", subtitle: "c", img: img3 },
  { tittle: "B", subtitle: "c", img: img4 },
  { tittle: "B", subtitle: "c", img: img5 },
  { tittle: "B", subtitle: "c", img: img6 },
];
class Portofolio extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {portofolio.map((item, index) => {
              return <PortofolioItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portofolio;
