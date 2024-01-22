/* eslint-disable react/style-prop-object */
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/images/NoInternet_Logo.svg";

export default function PageOffline() {
    
    return (
        <Container id="page-offline" fluid className="vh-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col xs={12} md={8}>
                    <Logo className="logo m-0 me-3 float-start" />
                    <h2 className="title-1 m-0 mb-2">Oh no! You have no internet connection!</h2>
                    <p className="mt-font-monospace m-0">There seems to be a problem with your wifi or mobile data connectivity! Please check your internet signal or your data balance.</p>
                </Col>
            </Row>
        </Container>
    );
};
