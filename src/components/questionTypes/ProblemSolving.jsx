import { useRef } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
import UseParseMathEq from '../../hooks/useParseMathEq';
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");

export default function ProblemSolving({appTheme, questionData}) {
    const deleteRef = useRef(null);
    const editRef = useRef(null);
    const {question} = questionData;

    const playDelete = () => {
        deleteRef.current?.playFromBeginning();
    };

    const playEdit = () => {
        editRef.current?.playFromBeginning();
    };
    
    return (
        <Card id="testType-problemsolving" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
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
                    {UseParseMathEq(question)}
                </p>
            </Card.Body>
        </Card>
    );
};
