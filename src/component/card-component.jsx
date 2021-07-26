import React from "react";
import { Button } from "react-bootstrap";
import "./card.styles.scss";

const Card = () => {
  return (
    <div className="card">
      <h1 className="card-title">What is Lorem Ipsum?</h1>
      <p className="card-des">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button variant="outline-secondary">Read more...</Button>
    </div>
  );
};

export default Card;
