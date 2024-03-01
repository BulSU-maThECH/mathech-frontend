<<<<<<< HEAD
import { Card } from "react-bootstrap";
=======
import { useRef } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906

export default function ProblemSolving({appTheme}) {
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
            <Card.Title>Question #5</Card.Title>
            <p>Nunc nec arcu nec lectus mattis tincidunt. Curabitur elementum urna vitae justo fermentum, id bibendum elit efficitur. Morbi
consectetur, libero vel aliquam convallis, nisl elit posuere eros, nec vulputate odio ligula vel dolor. Quisque non augue vitae
nunc eleifend eleifend sit amet a enim. Ut sagittis risus nec justo scelerisque, a tincidunt ligula efficitur.</p>
        <hr></hr>
        <hr></hr>
        <hr></hr>
=======
        <Card id="testType-enumeration" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold m-0">Problem Solving</Card.Title>
                
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
                    Nunc semper facilisis erat vel pulvinar. Integer cursus turpis et feugiat condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eros massa, imperdiet nec consequat a, blandit ut urna. Curabitur quis rhoncus purus, eu elementum leo.
                </p>
            </Card.Body>
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906
        </Card>
    );
};
