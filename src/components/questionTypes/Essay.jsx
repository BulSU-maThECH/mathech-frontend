import { useRef } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");

export default function Essay({appTheme}) {
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
                <Card.Title className="title-1 fw-bold m-0">Essay</Card.Title>

                <Stack direction="horizontal" gap={2}>
                    <Button variant="danger" onMouseEnter={playDelete} className="btn-option">
                        <Player ref={deleteRef} icon={IconTrash} state={'hover-empty'} />
                    </Button>

                    <Button variant="primary" onMouseEnter={playEdit} className="btn-option">
                        <Player ref={editRef} icon={IconEdit} state={'hover-line'} />
                    </Button>
                </Stack>
            </Card.Header>

            <Card.Body>
                <p className="text-instruction">
                    Vivamus hendrerit justo vitae dapibus tristique. Sed euismod massa vitae congue iaculis. Integer efficitur justo et ex eleifend, a sodales justo ultrices. Vestibulum nec justo vitae tortor sagittis malesuada.
                </p>
            </Card.Body>
        </Card>
    );
};
