import { Fragment, useEffect, useState } from "react";
import "../assets/css/quizGenerator.css";
import "../assets/css/testGenerator.css";
import { Button, Card, Container, Dropdown, Form, InputGroup, Stack } from "react-bootstrap";

export default function TestGenerator({appTheme}) {
    const [selectedTestType, setSelectedTestType] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedChapter, setSelectedChapter] = useState('');
    const [availableSubjects, setAvailableSubjects] = useState([]);
    const [availableTopics, setAvailableTopics] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/question/getSubjects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async (res) => {
            const responseJson = await res.json();

            setAvailableSubjects(responseJson.map((subject, index) => {
                return (
                    <Dropdown.Item key={index} onClick={() => setSelectedSubject(subject)}>{subject}</Dropdown.Item>
                );
            }));
        });
    }, []);

    useEffect(() => {
        if (selectedChapter !== '' && selectedSubject !== '') {
            let chapter;
            if (selectedChapter === 'Chapter I') {
                chapter = 1;
            }
            else if (selectedChapter === 'Chapter II') {
                chapter = 2;
            }
            else if (selectedChapter === 'Chapter III') {
                chapter = 3;
            }
            else {
                chapter = 4
            }

            fetch(`${process.env.REACT_APP_API_URL}/question/getSubtopics`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: selectedSubject,
                    chapter: chapter
                })
            })
            .then(async (res) => {
                const responseJson = await res.json();
                console.log(responseJson);
    
                if (responseJson.length === 0) {
                    setAvailableTopics([]);
                }
                else {
                    setAvailableTopics(responseJson.map((topic, index) => {
                        return (
                            <Form.Check key={index} type="checkbox" label={topic} name={topic} />
                        );
                    }));
                }
            });
        }
    }, [selectedSubject, selectedChapter]);

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

                    <Stack direction="horizontal" gap={3} className="mb-3 flex-wrap">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="testType" className="dropdown-selector">
                                {selectedSubject === '' ? 'Select test type...' : selectedSubject}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {availableSubjects}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="testType" className="dropdown-selector">
                                {selectedChapter === '' ? 'Select chapter...' : selectedChapter}
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
                            {availableTopics}
                        </Container>
                    </Stack>
                </Card.Body>

                <Card.Footer className="gap-3">
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
            </Stack>
        </Fragment>
    );
};