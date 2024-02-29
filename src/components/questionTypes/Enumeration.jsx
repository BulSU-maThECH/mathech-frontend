import { Card, ListGroup } from "react-bootstrap";

export default function Enumeration() {
    
    return (
        <Card className="p-3">
            <Card.Title>Question #4</Card.Title>
            <p>Lorem ipsum</p>
            <ListGroup as="ul"></ListGroup>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>          
        </Card>
    );
};
