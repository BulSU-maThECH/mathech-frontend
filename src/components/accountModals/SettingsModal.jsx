import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

export default function SettingsModal({isModalVisible, handleClose}) {
    return (
        <Modal show={isModalVisible} onHide={handleClose} centered className="modal-account modal-settings">
            <Modal.Header closeButton>
                <Modal.Title className="title-1"><FontAwesomeIcon icon="fa-solid fa-user-gear" />&ensp;Account Settings</Modal.Title>
            </Modal.Header>
        </Modal>
    );
};