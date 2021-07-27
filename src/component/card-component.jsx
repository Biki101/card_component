import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./card.styles.scss";

const Card = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  const [isTrucated, setIsTruncated] = useState("true");
  const renderedText = isTrucated ? text.slice(0, 100) : text;

  const toogleTruncation = () => {
    setIsTruncated(!isTrucated);
  };
  return (
    <div className="card">
      <h1 className="card-title">Biki Kumar Thakur</h1>
      <p className="card-des">{renderedText}</p>
      <Button variant="outline-secondary" onClick={toogleTruncation}>
        Read more...
      </Button>
    </div>
  );
};

export default Card;
