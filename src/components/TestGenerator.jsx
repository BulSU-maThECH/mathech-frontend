import "../assets/css/testGenerator.css";
import { Button, Card, Container, Dropdown, Form, InputGroup, Stack } from "react-bootstrap";

export default function TestGenerator({appTheme}) {
    
    return (
        <Card id="test-generator" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="mt-3" style={{'box-shadow': '0 0 5px #222222'}}>
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Test I</Card.Title>
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
                <textarea row="4" id="instruction" className="txtBox-instruction w-100 p-2" />

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="testType">
                        Select subject
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Math in Modern World</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Stack direction="vertical" gap={2}>
                    <h4 className="title">Sub-topic:</h4>
                    
                    <Container fluid={false} id="subjectList" className="w-100 p-0">
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                        <Form.Check type="checkbox" id="option1" label="Option 1" name="option 1" />
                    </Container>
                </Stack>
            </Card.Body>

            <Card.Footer className="d-flex align-items-center justify-content-between">
                <InputGroup className="me-5">
                    <InputGroup.Text>Number of item(s)/question(s)</InputGroup.Text>
                    <Form.Control type="number" id="totalItems" />
                </InputGroup>

                <InputGroup className="me-5">
                    <InputGroup.Text>Point(s)-per-item</InputGroup.Text>
                    <Form.Control type="number" id="totalItems" />
                </InputGroup>

                <Button variant="primary" id="btnGenerate">Generate Quiz</Button>
            </Card.Footer>
        </Card>
    );
};