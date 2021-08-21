import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bank from "../../Assets/Projects/bank.jpg";
import bike from "../../Assets/Projects/bike.jpg";
import blog from "../../Assets/Projects/blog.jpg";
import ecom from "../../Assets/Projects/ecom.jpg";
import flight from "../../Assets/Projects/flight.jpg";
import job from "../../Assets/Projects/job.jpg";
import movie from "../../Assets/Projects/movie.jpg";
import music from "../../Assets/Projects/music.jpg";
import students from "../../Assets/Projects/students.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import flipkart from "../../Assets/Projects/flipkart.jpeg";
import networking from "../../Assets/Projects/networking.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h2 className="purple">FrontEnd Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank Details Finder usinf IFSC Code"
              description="IFSC is short for Indian Financial System Code and represents the 11 digit character that you can usually see on your bank's cheque leaves, or other bank sponsored material."
              link="https://ifsc-api-app-vasanth-senthilkumar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Rental Application"
              description="A bike rental or bike hire business rents out bicycles for short periods of time, usually for a few hours. Most rentals are provided by bike shops as a sideline to their main businesses of sales and service, but shops specialize in rentals."
              link="https://bike-rental-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Simple Blog App"
              description="Blog or post description is the piece of text that appears below your link in SERPs and social sites. There are two types of descriptions for a blog. Blog description: A description of your whole blog visible under your blog's homepage link."
              link="https://simple-blog-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce App"
              description="Electronic commerce or e-commerce (sometimes written as eCommerce) is a business model that lets firms and individuals buy and sell things over the internet. E-commerce operates in all four of the following major market segments: Business to business. Business to consumer."
              link="https://ecom-shop-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Ticket Booking"
              description="An airline ticket is a document or electronic record, issued by an airline or a travel agency, that confirms that an individual is entitled to a seat on a flight on an aircraft. ... Then with the boarding pass and the attached ticket, the passenger is allowed to board the aircraf."
              link="https://flight-ticket-booking-vasanth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Ticket Book"
              description="Online Movie Ticket Booking System is a website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters. Customer needs to register at the site to book tickets to the movie."
              link="https://movie-ticket-booking-vasanth.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Online Music Player"
              description="To most people, 'Internet music' means 'music on (or off!) the Internet'. This, in turn, usually means downloadable mp3 files for iPod or mobile phone. ... The range of available music online is vast and expanding all the time, and it offers a direct route for young or unknown artists to attempt to reach a public."
              link="https://online-music-vasanth.netlify.app/"
            />
          </Col>
        </Row>
        <Container>
          <h2 className="purple">MERN Stack Projects</h2>
          <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Portal App"
              description="An employment website is a website that deals specifically with employment or careers. Many employment websites are designed to allow employers to post job requirements for a position to be filled and are commonly known as job boards"
              link="https://job-registration-vasanth-senthilkumar.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={students}
              isBlog={false}
              title="Students List Manager"
              description="Management (or managing) is the administration of an organization, whether it is a business, a non-profit organization, or a government body."
              link="https://vasanth-senthilkumar-student-list-app.netlify.app/create-student"
            />
          </Col>
          </Row>
        </Container>
        <Container>
          <h2 className="purple">Currently Working Projects</h2>
          <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Application"
              description="Electronic commerce or e-commerce (sometimes written as eCommerce) is a business model that lets firms and individuals buy and sell things over the internet. E-commerce operates in all four of the following major market segments: Business to business. Business to consumer."
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={networking}
              isBlog={false}
              title="Networking App"
              description="A computer network is a set of computers sharing resources located on or provided by network nodes. The computers use common communication protocols over digital interconnections to communicate with each other. These interconnections are made up of telecommunication network technologies, based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies."
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipkart}
              isBlog={false}
              title="Flipkart Clone"
              description="Electronic commerce or e-commerce (sometimes written as eCommerce) is a business model that lets firms and individuals buy and sell things over the internet. E-commerce operates in all four of the following major market segments: Business to business. Business to consumer."
              link=""
            />
          </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Projects;
