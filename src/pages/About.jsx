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

                    <Col xs={12} md={10} lg={8} id="team" className="position-relative">
                        <h4 className="title-1 text-center mb-3">Meet the Team</h4>
                        
                        <Row className="p-0 m-0 gap-5">
                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 mb-3 mb-md-0 me-md-3 float-start">
                                    <Figure.Image fluid rounded className="team-img m-0" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1705979611/maThECH/lourd_profile_c43opn.jpg" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Lourd Nathaniel S. Gonzalez</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Team Leader, Lead Full-stack Developer</h6>

                                <p className="about-team-member">
                                    As the team leader and lead full-stack developer for maThECH, my primary responsibility was to oversee and guide the entire development process. I played a pivotal role in conceptualizing the project, making strategic decisions, and ensuring seamless collaboration among team members. On the front-end, I spearheaded the development of the innovative online quiz generator using the MERN stack, focusing on creating a user-friendly and interactive interface. I actively engaged in the design and customization aspects, ensuring that maThECH provides a dynamic and engaging learning experience. Additionally, on the back-end, I led the development of a robust API that seamlessly integrated with the front-end, handling diverse API requests and supporting essential features such as quiz generation and user authentication. My contribution to maThECH reflects a combination of leadership, technical expertise, and a commitment to creating an effective and engaging educational platform.
                                </p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 mb-3 mb-md-0 ms-md-3 float-end">
                                    <Figure.Image fluid rounded className="team-img m-0" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1705979486/maThECH/james_profile_hmjxyw.jpg" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">James Carl C. Delos Santos</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Front-end developer, Graphic Designer, Documentation Specialist</h6>

                                <p className="about-team-member">
                                    Serving as the Front-end Developer, Graphic Designer, and Documentation Specialist, I focused on crafting an engaging user interface and experience for maThECH. I worked closely with Athens to translate the project requirements into visually appealing designs, ensuring a user-friendly and intuitive interface. My role extended to implementing these designs on the frontend using the MERN stack, creating a seamless and interactive environment for users. Additionally, I took charge of graphic design elements, contributing to the overall aesthetic of the platform, and played a key role in documenting the development process for future reference.
                                </p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 mb-3 mb-md-0 me-md-3 float-start">
                                    <Figure.Image fluid rounded className="team-img m-0" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1706056785/maThECH/charles_profile_cqr0gu.jpg" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Charles Lorette Q. Perez</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Front-end Developer, Documentation Specialist</h6>

                                <p className="about-team-member">
                                    In my role as a Front-end Developer and Documentation Specialist, I worked alongside Carl to implement the frontend features of maThECH. I focused on ensuring the responsiveness and accessibility of the platform, contributing to the creation of a dynamic and engaging quiz generation experience. Simultaneously, I played a crucial role in documenting the frontend development process, detailing key aspects of the codebase and user interface for better understanding and future updates.
                                </p>
                            </Col>

                            <Col xs={12} className="p-0">
                                <Figure className="team-img-container m-0 mb-3 mb-md-0 ms-md-3 float-end">
                                    <Figure.Image fluid rounded className="team-img m-0" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1706058349/maThECH/luis_profile_ndhzvo.jpg" />
                                </Figure>
                                <h3 className="title-2 m-0 mb-1">Luis James M. Garcia</h3>
                                <h6 className="subtitle fst-italic m-0 mb-3">Back-end Developer, Documentation Specialist</h6>

                                <p className="about-team-member">
                                    As the Back-end Developer and Documentation Specialist, my primary responsibility was to create a robust backend API that seamlessly handled requests from the frontend. I implemented the necessary features to support quiz generation, user authentication, and overall platform functionality. My role involved ensuring the security and efficiency of the backend, providing a solid foundation for the entire maThECH system. Additionally, I contributed to the documentation process, creating comprehensive guides to assist both current and future developers in understanding the intricacies of the backend architecture.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};