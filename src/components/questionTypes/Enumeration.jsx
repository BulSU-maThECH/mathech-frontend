<<<<<<< HEAD
import { Card, ListGroup } from "react-bootstrap";
=======
import { useRef } from "react";
import { Button, Card, InputGroup, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906

export default function Enumeration({appTheme}) {
    const deleteRef = useRef(null);
    const editRef = useRef(null);

    const playDelete = () => {
        deleteRef.current?.playFromBeginning();
    };

    const playEdit = () => {
        editRef.current?.playFromBeginning();
    };
    
    return (
<<<<<<< HEAD
        <Card className="p-3">
            <Card.Title>Question #4</Card.Title>
            <p>Lorem ipsum</p>
            <ListGroup as="ul"></ListGroup>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>          
=======
        <Card id="testType-enumeration" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold m-0">Enumeration</Card.Title>

                <Stack direction="horizontal" gap={2}>
                    <Button variant="danger" onMouseEnter={playDelete}>
                        <Player ref={deleteRef} icon={IconTrash} state={'hover-empty'} />
                    </Button>

                    <Button variant="primary" onMouseEnter={playEdit}>
                        <Player ref={editRef} icon={IconEdit} state={'hover-line'} />
                    </Button>
                </Stack>
            </Card.Header>

            <Card.Body>
                <p className="text-instruction">Lorem Ipsum</p>
                
                <Stack direction="vertical" gap={2}>
                    <InputGroup className="listGroup-inputGroup">
                        <InputGroup.Text>&#8226;</InputGroup.Text>
                        <InputGroup.Text className="flex-grow-1">Item 1</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="listGroup-inputGroup">
                        <InputGroup.Text>&#8226;</InputGroup.Text>
                        <InputGroup.Text className="flex-grow-1">Item 2</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="listGroup-inputGroup">
                        <InputGroup.Text>&#8226;</InputGroup.Text>
                        <InputGroup.Text className="flex-grow-1">Item 3</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="listGroup-inputGroup">
                        <InputGroup.Text>&#8226;</InputGroup.Text>
                        <InputGroup.Text className="flex-grow-1">Item 4</InputGroup.Text>
                    </InputGroup>
                </Stack>
            </Card.Body>
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906
        </Card>
    );
};
