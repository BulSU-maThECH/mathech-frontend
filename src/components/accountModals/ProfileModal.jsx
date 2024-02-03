import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Modal } from "react-bootstrap";

export default function ProfileModal({isModalVisible, handleClose}) {
    return (
        <Modal show={isModalVisible} onHide={handleClose} centered className="modal-account modal-profile">
            <Modal.Header closeButton>
                <Modal.Title className="title-1"><FontAwesomeIcon icon="fa-solid fa-circle-user" />&ensp;Profile</Modal.Title>

                <Modal.Body>
                    <Form.Control type="text" placeholder="something" />
                </Modal.Body>
            </Modal.Header>
        </Modal>);
};
