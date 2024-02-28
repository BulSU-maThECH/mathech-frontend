import "../assets/css/testGenerator.css";
import { Button, Card, Container, Dropdown, Form, InputGroup, Stack } from "react-bootstrap";

export default function TestGenerator({appTheme}) {
    
    return (
        <Card id="test-generator" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="mt-3" style={{'box-shadow': '0 0 5px #222222'}}>
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="title-1 fw-bold">Test I</Card.Title>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="testType">
                        Select test type...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Enumeration</Dropdown.Item>
                        <Dropdown.Item>Essay</Dropdown.Item>
                        <Dropdown.Item>Multiple Answer</Dropdown.Item>
                        <Dropdown.Item>Multiple Choice</Dropdown.Item>
                        <Dropdown.Item>Short Answer</Dropdown.Item>
                        <Dropdown.Item>Problem Solving</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>

            <Card.Body>
                <textarea row="4" id="instruction" className="txtBox-instruction w-100 p-2 mb-2" />

                <Stack direction="horizontal" gap={3} className="mb-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="testType">
                            Select subject
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Mathematics in the Modern World</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="testType">
                            Select Chapter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Chapter I</Dropdown.Item>
                            <Dropdown.Item>Chapter II</Dropdown.Item>
                            <Dropdown.Item>Chapter III</Dropdown.Item>
                            <Dropdown.Item>Chapter IV</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Stack>

                <Stack direction="vertical" gap={2}>
                    <h5 className="subtitle fs-6">Sub-topic:</h5>
                    
                    <Container fluid={false} id="subjectList" className="w-100 p-0">
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
    );
};