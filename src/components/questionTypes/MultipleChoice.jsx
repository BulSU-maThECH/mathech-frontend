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

export default function MultipleChoice({appTheme}) {
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
            <Card.Title>Question #1</Card.Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam curabitur inceptos etiam blandit consectetur, vestibulum
rhoncus velit malesuada? Sed dapibus ultricies orci, nec aliquam eros venenatis eget. Quisque ullamcorper, quam ut
tincidunt tincidunt, felis metus pellentesque felis, nec scelerisque orci urna id ligula?</p>
            <ListGroup as="ol">
                <ListGroup.Item as="li">Answer 1</ListGroup.Item>
                <ListGroup.Item as="li">Answer 2</ListGroup.Item>
                <ListGroup.Item as="li">Answer 3</ListGroup.Item>
                <ListGroup.Item as="li">Answer 4</ListGroup.Item>
            </ListGroup>
=======
        <Card id="testType-enumeration" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold m-0">Multiple Choice</Card.Title>
                
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
                <p className="text-instruction">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam curabitur inceptos etiam blandit consectetur, vestibulum rhoncus velit malesuada? Sed dapibus ultricies orci, nec aliquam eros venenatis eget. Quisque ullamcorper, quam ut tincidunt tincidunt, felis metus pellentesque felis, nec scelerisque orci urna id ligula?
                </p>

                <Stack direction="vertical" gap={2} className="w-50">
                    <InputGroup>
                        <InputGroup.Radio name="group1" />
                        <InputGroup.Text className="flex-grow-1">Choice 1</InputGroup.Text>
                    </InputGroup>
                    
                    <InputGroup>
                        <InputGroup.Radio name="group1" />
                        <InputGroup.Text className="flex-grow-1">Choice 2</InputGroup.Text>
                    </InputGroup>
                    
                    <InputGroup>
                        <InputGroup.Radio name="group1" />
                        <InputGroup.Text className="flex-grow-1">Choice 3</InputGroup.Text>
                    </InputGroup>
                    
                    <InputGroup>
                        <InputGroup.Radio name="group1" />
                        <InputGroup.Text className="flex-grow-1">Choice 4</InputGroup.Text>
                    </InputGroup>
                </Stack>
            </Card.Body>
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906
        </Card>
    );
};
