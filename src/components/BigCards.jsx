import "../Styles/main.less";
import "../Styles/Dashboard/bigCard.less";
import React from "react";
import brandImage from "../assets/images/brandImg.png";
import icons from "../assets/assets";
import bgImage from "../assets/images/bigCardBG.png";

export default function BigCards() {
  return (
    <div className="big-cards">
      <div className="left-big-cards">
        <div className="context">
          <h6>Built by developers</h6>
          <h4>Purify UI Dashboard</h4>
          <p>
            From colors, cards, typography to complex elements,&nbsp;
            <span>you will find the full documentation.</span>
          </p>

          <div className="link-container">
            <a>Read more</a>
            <img className="icon" src={icons.arrowBlack} alt=">" />
          </div>
        </div>
        <div className="brand-img">
          <img src={brandImage} alt="" />
        </div>
      </div>
      <div className="right-big-cards">
        <div className="box">
          <div className="context">
            <h4>Work with the Rockets</h4>
            <p>
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who take the opportunity first.
            </p>
            <div className="link-container">
              <a>Read more</a>
              <img className="icon" src={icons.arrowWhite} alt=">" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
