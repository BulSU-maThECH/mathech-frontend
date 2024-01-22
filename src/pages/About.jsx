import { Col, Container, Figure, Nav, Row } from "react-bootstrap";
import "../assets/css/about.css";
import { Link as ScrollLink } from "react-scroll";
import "holderjs";

export default function About({appTheme}) {
    
    return (
        <Container fluid id="page-about" className="page page-about py-3">
            <Container className="page-container pt-5 pb-3">
                <h2 className="title-1 text-center">About</h2>
                <Nav className="justify-content-center align-items-center mb-5">
                    <Nav.Link as={ScrollLink} to="mission" smooth duration={500} spy offset={-10}>Mission</Nav.Link>
                    <Nav.Link as={ScrollLink} to="history" smooth duration={500} spy offset={-10}>History</Nav.Link>
                    <Nav.Link as={ScrollLink} to="team" smooth duration={500} spy offset={-10}>Team</Nav.Link>
                </Nav>

                <Row className="m-0 justify-content-center">
                    <Col xs={12} md={10} lg={8} id="mission" className="mb-3">
                        <h4 className="title-1 text-center mb-3">Mission</h4>
                        <div className="content">
                            <Figure className="m-0 me-3 float-start">
                                <Figure.Image fluid className="m-0" src="https://iili.io/J7rqzuf.gif" />
                            </Figure>
                            <p>
                                At maThECH, our mission is to revolutionize the educational landscape by providing educators with a transformative platform that liberates them from the time-consuming task of quiz creation. We are committed to empowering educators at the senior high school and college levels, offering a versatile web-based tool that seamlessly integrates AI-generated text in quiz creation, allowing for efficient, customized, and curriculum-aligned assessments in mathematics and computer studies.
                            </p>

                            <p>
                                Our mission is to alleviate the burdens on educators, enabling them to redirect their energy towards the core of teaching – inspiring and empowering the next generation of mathematicians and computer scientists. We strive to be a catalyst for positive change in education, providing a user-friendly interface that prioritizes ease of use and accessibility. Through our platform, we aim to facilitate a shift towards a digital era where educators can confidently embrace technology, knowing that they have a powerful ally that streamlines their workflow and enriches their capacity to educate effectively.
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={10} lg={8} id="history" className="mb-3">
                        <h4 className="title-1 text-center mb-3">History</h4>
                    </Col>

                    <Col xs={12} md={10} lg={8} id="team" className="position-relative">
                        <h4 className="title-1 text-center mb-3">Meet the Team</h4>
                        
                        <Row className="p-0 m-0 gap-5">
                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 me-md-3 float-start">
                                    <Figure.Image fluid rounded className="team-img m-0" src="https://iili.io/J74qLmb.jpg" data-src="holder.js/300x300" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Lourd Nathaniel S. Gonzalez</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Lead Developer, Team Leader</h6>

                                <p>AboutMe</p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 ms-md-3 float-end">
                                    <Figure.Image fluid rounded className="team-img m-0" src="" data-src="holder.js/300x300" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Luis James M. Garcia</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Role</h6>

                                <p>AboutMe</p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 me-md-3 float-start">
                                    <Figure.Image fluid rounded className="team-img m-0" src="" data-src="holder.js/300x300" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">James Carl C. Delos Santos</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Role</h6>

                                <p>AboutMe</p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 ms-md-3 float-end">
                                    <Figure.Image fluid rounded className="team-img m-0" src="" data-src="holder.js/300x300" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Charles Lorette Q. Perez</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Role</h6>

                                <p>AboutMe</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};