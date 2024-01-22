import { useState } from "react";
import "../assets/css/dashboardSidebar.css";
import { Button, Container, ListGroup, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardSidebar({appTheme}) {
    const [isSidebarClose, setIsSidebarClose] = useState(false);
    const [isAccountVisible, setIsAccountVisible] = useState(false);

    return (
        <Container fluid id="DashboardSidebar" className={`sidebar-${appTheme} p-0 m-0 ${isSidebarClose ? 'close' : ''}`}>
            <Stack direction="vertical" className="h-100">
                <Button variant={false} className="sidebar-toggle" onClick={() => setIsSidebarClose(!isSidebarClose)}><FontAwesomeIcon icon="fa-solid fa-bars" /></Button>

                <Stack direction="vertical" gap={2} className="quiz-list p-3">
                    <Button variant="secondary" className="quiz-list-item"><FontAwesomeIcon icon="fa-solid fa-file-lines" /><span className="text">Quiz Item 1</span></Button>
                </Stack>
                
                <div className="account-container position-relative">
                    <Button variant={false} className="btn-account w-100" onClick={() => setIsAccountVisible(!isAccountVisible)} disabled={isSidebarClose}><FontAwesomeIcon icon="fa-solid fa-user" /><span className="text">Account</span></Button>

                    <ListGroup className={`${isSidebarClose ? '' : isAccountVisible ? 'show' : ''} account-card`}>
                        <ListGroup.Item variant={appTheme} action onClick=""><FontAwesomeIcon icon="fa-regular fa-id-badge" />&ensp;Profile</ListGroup.Item>
                        <ListGroup.Item variant={appTheme} action onClick=""><FontAwesomeIcon icon="fa-solid fa-gear" />&ensp;Settings</ListGroup.Item>
                    </ListGroup>
                </div>
            </Stack>
        </Container>
    );
};