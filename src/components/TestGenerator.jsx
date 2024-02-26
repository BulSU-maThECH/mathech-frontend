import { Card } from "react-bootstrap";

export default function TestGenerator({appTheme}) {
    
    return (
        <Card id="test-generator" bg={appTheme} text={appTheme === 'light' ? 'dark' : 'white'} className="mt-3" style={{'box-shadow': '0 0 5px #222222'}}>
            <Card.Header className="d-flex justify-content-between">
                <Card.Title>Test I</Card.Title>
                
            </Card.Header>
        </Card>
    );
};