import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;

  // I rewrote this function to satisfy requirement 3 and 4 of Unit 39.5
  // though it is a little bit different, I believe it handles the situation 
  // more elegantly and the test I wrote for it passes.
  const changePictureSrc = (evt) => {
    const deckLength = props.cardData.length;

    if (evt.target.id === "left-arrow") {
      cardIdx === 0 ? setCardIdx(deckLength - 1) : setCardIdx(cardIdx - 1);
      return;
    };

    cardIdx === deckLength - 1 ? setCardIdx(0) : setCardIdx(cardIdx + 1);
  };

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={changePictureSrc}
          data-testid="left-arrow"
          id="left-arrow"
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={changePictureSrc}
          data-testid="right-arrow"
          id="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
