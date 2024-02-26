import { useState } from "react";
import "../assets/css/dashboardSidebar.css";
import { Button, Container, ListGroup, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProfileModal from "./accountModals/ProfileModal";
import SettingsModal from "./accountModals/SettingsModal";
import SecurityModal from "./accountModals/SecurityModal";

export default function DashboardSidebar({appTheme}) {
    const [isSidebarClose, setIsSidebarClose] = useState(false);
    const [isAccountVisible, setIsAccountVisible] = useState(false);
    const [isModalProfileVisible, setIsModalProfileVisible] = useState(false);
    const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);
    const [isModalSecurityVisible, setIsModalSecurityVisible] = useState(false);

    const toggleSidebar = () => {
        const page = document.querySelector('.page');
        const dashboardSidebar = document.getElementById('DashboardSidebar');
        const windowWidth = window.innerWidth;
        console.log(windowWidth);

        if (isSidebarClose) {
            setIsSidebarClose(false);
            dashboardSidebar.style.setProperty('width', '300px');
            page.style.setProperty('width', `${windowWidth - 300}px`);
        }
        else {
            setIsSidebarClose(true);
            dashboardSidebar.style.setProperty('width', '50px');
            page.style.setProperty('width', `${windowWidth - 50}px`);
        }
    }

    const handleProfileModal = () => {
        setIsModalProfileVisible(!isModalProfileVisible);
        setIsAccountVisible(false);
    }

    const handleSettingsModal = () => {
        setIsModalSettingsVisible(!isModalSettingsVisible);
        setIsAccountVisible(false);
    }

    const handleSecurityModal = () => {
        setIsModalSecurityVisible(!isModalSecurityVisible);
        setIsAccountVisible(false);
    }

    return (
        <Container fluid className="p-0 m-0 position-relative dashboard-container">
            <Container fluid id="DashboardSidebar" className={`sidebar-${appTheme} p-0 m-0 ${isSidebarClose ? 'close' : ''}`} style={{ 'width': '300px'}}>
                <Stack direction="vertical" className="h-100">
                    <Button variant={false} className="sidebar-toggle" onClick={toggleSidebar}><FontAwesomeIcon icon="fa-solid fa-bars" /></Button>
                    <Button as={Link} to="/" variant="secondary" className="new-quiz m-2"><FontAwesomeIcon icon="fa-regular fa-square-plus" />&ensp;New Quiz</Button>

                    <Stack direction="vertical" gap={2} className="quiz-list p-2">
                        <Button variant="secondary" className="quiz-list-item"><FontAwesomeIcon icon="fa-solid fa-file-lines" /><span className="text">Quiz Item 1</span></Button>
                    </Stack>
                    
                    <div className="account-container position-relative">
                        <Button variant={false} className="btn-account w-100" onClick={() => setIsAccountVisible(!isAccountVisible)}><FontAwesomeIcon icon="fa-solid fa-user" /><span className="text">Account</span></Button>

                        <ListGroup className={`${isAccountVisible ? 'show' : ''} account-card`}>
                            <ListGroup.Item variant={appTheme} action onClick={handleProfileModal}><FontAwesomeIcon icon="fa-regular fa-id-badge" />&ensp;Profile</ListGroup.Item>
                            <ListGroup.Item variant={appTheme} action onClick={handleSettingsModal}><FontAwesomeIcon icon="fa-solid fa-gear" />&ensp;Account Settings</ListGroup.Item>
                            <ListGroup.Item variant={appTheme} action onClick={handleSecurityModal}><FontAwesomeIcon icon="fa-solid fa-shield-halved" />&ensp;Account Security</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Stack>
            </Container>

            <ProfileModal isModalVisible={isModalProfileVisible} handleClose={() => setIsModalProfileVisible(false)} />
            <SettingsModal isModalVisible={isModalSettingsVisible} handleClose={() => setIsModalSettingsVisible(false)} />
            <SecurityModal isModalVisible={isModalSecurityVisible} handleClose={() => setIsModalSecurityVisible(false)} />
        </Container>
    );
};