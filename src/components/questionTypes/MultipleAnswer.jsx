import { useRef } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");

export default function MultipleAnswer({appTheme}) {
    const deleteRef = useRef(null);
    const editRef = useRef(null);

    const playDelete = () => {
        deleteRef.current?.playFromBeginning();
    };

    const playEdit = () => {
        editRef.current?.playFromBeginning();
    };
    
    return (
        <Card id="testType-enumeration" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold m-0">Multiple Answer</Card.Title>

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
                    Mauris tempus, tellus ut ornare varius, velit ipsum vulputate ante, nec facilisis est felis quis nibh. Proin pharetra, risus sit amet porttitor ultricies, justo arcu rhoncus turpis, ac condimentum mi diam id mi.
                </p>

                <Container fluid className="checkbox-list m-0 w-100">
                    <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                    <Form.Check type="checkbox" id="option2" label="Option 2" name="option 2" />
                    <Form.Check type="checkbox" id="option3" label="Option 3" name="option 3" />
                    <Form.Check type="checkbox" id="option4" label="Option 4" name="option 4" />
                    <Form.Check type="checkbox" id="option5" label="Option 5" name="option 5" />
                    <Form.Check type="checkbox" id="option6" label="Option 6" name="option 6" />
                    <Form.Check type="checkbox" id="option7" label="Option 7" name="option 7" />
                    <Form.Check type="checkbox" id="option8" label="Option 8" name="option 8" />
                    <Form.Check type="checkbox" id="option9" label="Option 9" name="option 9" />
                </Container>
            </Card.Body>
        </Card>
    );
};
