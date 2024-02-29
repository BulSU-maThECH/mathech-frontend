import { Card, ListGroup } from "react-bootstrap";

export default function MultipleChoice() {
    
    return (
        <Card className="p-3">
            <Card.Title>Question #1</Card.Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam curabitur inceptos etiam blandit consectetur, vestibulum
rhoncus velit malesuada? Sed dapibus ultricies orci, nec aliquam eros venenatis eget. Quisque ullamcorper, quam ut
tincidunt tincidunt, felis metus pellentesque felis, nec scelerisque orci urna id ligula?</p>
            <ListGroup as="ol">
                <ListGroup.Item as="li">Answer 1</ListGroup.Item>
                <ListGroup.Item as="li">Answer 2</ListGroup.Item>
                <ListGroup.Item as="li">Answer 3</ListGroup.Item>
                <ListGroup.Item as="li">Answer 4</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
