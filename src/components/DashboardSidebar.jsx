import { useRef, useState } from "react";
import "../assets/css/dashboardSidebar.css";
import { Button, Container, ListGroup, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProfileModal from "./accountModals/ProfileModal";
import SettingsModal from "./accountModals/SettingsModal";
import SecurityModal from "./accountModals/SecurityModal";
import { Player } from "@lordicon/react";
const IconPlus = require("../assets/images/wired-flat-49-plus-circle.json");
const IconDoc = require("../assets/images/wired-flat-245-edit-document.json");
const IconAccount = require("../assets/images/wired-flat-21-avatar.json");
const IconResize = require("../assets/images/system-solid-15-ratio.json");

const AnimatedButton = ({buttonKey}) => {
    const [isHovered, setIsHovered] = useState(false);
    const playRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        playRef.current?.playFromBeginning();
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <Button key={buttonKey} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} variant="secondary" className="quiz-list-item align-items-center">
            <Player ref={playRef} icon={IconDoc} state={isHovered ? 'hover-pinch' : 'hover-pinch'} />
            <span className="text">Quiz Item {buttonKey}</span>
        </Button>
    );
}

export default function DashboardSidebar({appTheme}) {
    const [isSidebarClose, setIsSidebarClose] = useState(false);
    const [isAccountVisible, setIsAccountVisible] = useState(false);
    const [isModalProfileVisible, setIsModalProfileVisible] = useState(false);
    const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);
    const [isModalSecurityVisible, setIsModalSecurityVisible] = useState(false);
    const addRef = useRef(null);
    const accountRef = useRef(null);
    const toggleResizeRef = useRef(null);

    const playAdd = () => {
        addRef.current?.playFromBeginning();
    }

    const playAvatar = () => {
        accountRef.current?.playFromBeginning();
    }

    const playResize = () => {
        toggleResizeRef.current?.playFromBeginning();
    }

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
                    <Button variant={false} className="sidebar-toggle d-flex justify-content-center" onClick={toggleSidebar} onMouseEnter={playResize} >
                        <Player ref={toggleResizeRef} icon={IconResize} state={'hover-ratio'} />
                    </Button>
                    <Button as={Link} to="/" variant="secondary" className="new-quiz m-2 align-items-center justify-content-center gap-1" onMouseEnter={playAdd}>
                        <Player ref={addRef} icon={IconPlus} state={'hover-rotation'} />
                        New Quiz
                    </Button>

                    <Stack direction="vertical" gap={2} className="quiz-list p-2">
                        {/* <AnimatedButton buttonKey={1} /> */}
                    </Stack>
                    
                    <div className="account-container position-relative">
                        <Button variant={false} className="btn-account d-flex justify-content-center align-items-center gap-1 w-100" onClick={() => setIsAccountVisible(!isAccountVisible)} onMouseEnter={playAvatar}>
                            <Player ref={accountRef} icon={IconAccount} state={'hover-jumping'} />
                            <span className="text">Account</span>
                        </Button>

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