import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="talk-card-image-div">
            <img
              src={talkDetails.image}
              alt={talkDetails.imageAlt || "Card Thumbnail"}
              className="talk-card-image"
            ></img>
          </div>
          <div className="talk-card-details-div">
            <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
            <div className="card-footer-button-div">
              <a href={talkDetails.slides_url} target="_" className="talk-button">
                Slides
              </a>
              <a href={talkDetails.event_url} target="_" className="talk-button">
                Event
              </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
