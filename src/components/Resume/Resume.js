
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/VASANTH.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Graduate Engineering Trainee [NVH India]"
              date="May 2019 - May 2020"
              content={[
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Practice"
              content={[
                "Creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Practice"
              content={[
                "Developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MECHANICAL ENGINEERING [AVS EC, Salem, TamilNadu] "
              date="2019"
              content={[`CGPA: 7.5`]}
            />
            <Resumecontent
              title="12TH BOARD [MAM Higher Secondary School, Mettur]"
              date="2014 - 2015"
              content={["Precentage: 68%"]}
            />
            <Resumecontent
              title="10TH BOARD [MAM Higher Secondary School, Mettur] "
              date="2012 - 2013"
              content={["Precentage: 83%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
