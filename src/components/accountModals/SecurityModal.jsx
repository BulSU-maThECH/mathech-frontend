import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

export default function SecurityModal({isModalVisible, handleClose}) {
    return (
        <Modal show={isModalVisible} onHide={handleClose} centered className="modal-account modal-security">
            <Modal.Header closeButton>
                <Modal.Title className="title-1"><FontAwesomeIcon icon="fa-solid fa-user-shield" />&ensp;Account Security</Modal.Title>
            </Modal.Header>
        </Modal>);
};