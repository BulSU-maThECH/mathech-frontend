import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, FormCheck, Image, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function AppNavbar({toggleAppTheme, appTheme, unsetUser}) {
    const {user} = useContext(UserContext);
    return (
        <Navbar expand="md" id="AppNavbar" variant={appTheme} className="p-0">
            <Container className="navbar-container">
                <Navbar.Brand as={Link} to="/" className="p-0 me-5">
                    <Image alt="appnavbar-logo" src={process.env.PUBLIC_URL + `logo.png`} />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="header-nav"><FontAwesomeIcon icon="fa-solid fa-bars" /></Navbar.Toggle>

                <Navbar.Collapse id="header-nav">
                    <Stack direction="horizontal" className="w-100">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">{user ? 'Quiz Generator' : 'Home'}</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav className="flex-row align-items-center gap-3">
                            {user && (
                                <Button variant="danger" onClick={unsetUser} className="fs-6 py-1">
                                Logout&ensp;<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                                </Button>
                            )}
                            <FormCheck type="switch" id="btnToggleTheme" onClick={toggleAppTheme} />
                        </Nav>
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};