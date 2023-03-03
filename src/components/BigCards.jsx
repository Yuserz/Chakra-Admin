import "../Styles/main.less";
import "../Styles/Dashboard/bigCard.less";
import React from "react";

export default function BigCards() {
  return (
    <div className="big-cards">
      <div className="left">
        <div className="context">
          <h6>Built by developers</h6>
          <h4>Purify UI Dashboard</h4>
          <p>
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
          <div className="link-container">
            <a>
              Read more <img src="" alt=">" />
            </a>
          </div>
        </div>
        <div className="brand-img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right">
        <h4>Work with the Rockets</h4>
        <p>
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </p>
        <a>
          Read more <img src="" alt=">" />
        </a>
        <img src="" alt="" />
      </div>
    </div>
  );
}
