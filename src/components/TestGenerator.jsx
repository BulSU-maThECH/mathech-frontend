import { Fragment, useState } from "react";
import "../assets/css/quizGenerator.css";
import "../assets/css/testGenerator.css";
import Enumeration from "./questionTypes/Enumeration";
import Essay from "./questionTypes/Essay";
import MultipleAnswer from "./questionTypes/MultipleAnswer";
import MultipleChoice from "./questionTypes/MultipleChoice";
import ShortAnswer from "./questionTypes/ShortAnswer";
import ProblemSolving from "./questionTypes/ProblemSolving";
import { Button, Card, Container, Dropdown, Form, InputGroup, Stack } from "react-bootstrap";

export default function TestGenerator({appTheme}) {
    const [selectedTestType, setSelectedTestType] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedChapter, setSelectedChapter] = useState("");

    return (
        <Fragment>
            <Card id="test-generator" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="card-test mt-3">
                <Card.Header className="d-flex align-items-center justify-content-between">
                    <Card.Title className="title-1 fw-bold m-0">Test I</Card.Title>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="testType" className="dropdown-selector">
                            {selectedTestType === '' ? 'Select test type...' : selectedTestType}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSelectedTestType("Enumeration")}>Enumeration</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedTestType("Essay")}>Essay</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedTestType("Multiple Answer")}>Multiple Answer</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedTestType("Multiple Choice")}>Multiple Choice</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedTestType("Short Answer")}>Short Answer</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSelectedTestType("Problem Solving")}>Problem Solving</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>

                <Card.Body>
                    <textarea row="4" id="instruction" className={`bg-${appTheme} txtBox-instruction w-100 p-2 mb-2`} />

                    <Stack direction="horizontal" gap={3} className="mb-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="testType" className="dropdown-selector">
                                {selectedSubject === '' ? 'Select test type...' : selectedSubject}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSelectedSubject("Mathematics in the Modern World")}>Mathematics in the Modern World</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="testType" className="dropdown-selector">
                                {selectedChapter === '' ? 'Select test type...' : selectedChapter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSelectedChapter("Chapter I")}>Chapter I</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedChapter("Chapter II")}>Chapter II</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedChapter("Chapter III")}>Chapter III</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectedChapter("Chapter IV")}>Chapter IV</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Stack>

                    <Stack direction="vertical" gap={2}>
                        <h5 className="subtitle fs-6">Sub-topic:</h5>
                        
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
                    </Stack>
                </Card.Body>

                <Card.Footer className="d-flex align-items-center justify-content-between">
                    <InputGroup>
                        <InputGroup.Text>Number of item(s)</InputGroup.Text>
                        <Form.Control type="number" />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Point(s)-per-item</InputGroup.Text>
                        <Form.Control type="number" />
                    </InputGroup>

                    <Button variant="primary" className="btn-generateQestions">Generate Question(s)</Button>
                </Card.Footer>
            </Card>
            
            <Stack direction="vertical" gap={3} className="my-3">
                <Enumeration appTheme={appTheme} />
                <Essay appTheme={appTheme} />
                <MultipleAnswer appTheme={appTheme} />
                <MultipleChoice appTheme={appTheme} />
                <ShortAnswer appTheme={appTheme} />
                <ProblemSolving appTheme={appTheme} />
            </Stack>
        </Fragment>
    );
};