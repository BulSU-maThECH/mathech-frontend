import "../assets/css/quizGenerator.css";
import { Container } from "react-bootstrap";
import TestGenerator from "../components/TestGenerator";

export default function QuizGenerator({appTheme}) {
    
    return (
        <Container fluid id="page-quizGenerator" className="page page-quizGenerator px-3" style={{ 'width': `${window.innerWidth - 300}px`}}>
            <TestGenerator appTheme={appTheme} />
        </Container>
    );
};