import { useEffect, useRef, useState } from "react";
import { Button, Card, InputGroup, Stack } from "react-bootstrap";
import { Player } from "@lordicon/react";
import "../../assets/css/quizGenerator.css";
import "../../assets/css/testTypes.css";
import UseParseMathEq from '../../hooks/useParseMathEq';
const IconTrash = require("../../assets/images/wired-flat-185-trash-bin.json");
const IconEdit = require("../../assets/images/wired-flat-35-edit.json");

export default function Enumeration({questionData, index}) {
    const [appTheme, setAppTheme] = useState(document.body.getAttribute('data-mt-theme'));
    const deleteRef = useRef(null);
    const editRef = useRef(null);
    const {question} = questionData;
    
    useEffect(() => {
        const bodyObserver = new MutationObserver(mutationList => {
            for (let mutation of mutationList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-mt-theme') {
                    const newTheme = mutation.target.getAttribute('data-mt-theme');
                    setAppTheme(newTheme);
                }
            }
        });

        bodyObserver.observe(document.body, { attributes: true });

        return () => {
            bodyObserver.disconnect();
        }
    });

    const playDelete = () => {
        deleteRef.current?.playFromBeginning();
    };

    const playEdit = () => {
        editRef.current?.playFromBeginning();
    };
    
    return (
        <Card id="testType-enumeration" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold m-0">Question #{index + 1}</Card.Title>

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
        </Card>
    );
};
