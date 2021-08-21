import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasanth Senthilkumar </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />I am completed my under graduation in Mechanical AVS EC, Salem.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Create the Error and Find the Solution"{" "}
          </p><br/>
          <footer className="blockquote-footer">Vasanth Senthilkumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
