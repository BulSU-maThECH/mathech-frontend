import "../assets/css/quizGenerator.css";
import { Container } from "react-bootstrap";
import TestGenerator from "../components/TestGenerator";

export default function QuizGenerator({appTheme}) {
    
    return (
<<<<<<< HEAD
        <Container fluid id="page-home" className="page page-home px-3" style={{ 'width': `${window.innerWidth - 300}px`}}>
            {/* <TestGenerator appTheme={appTheme} /> */}
            {/* <Enumeration appTheme={appTheme} /> */}
            <Essay appTheme={appTheme} />
            {/* <MultipleAnswer appTheme={appTheme} /> */}
            {/* <MultipleChoice appTheme={appTheme} /> */}
            {/* <ShortAnswer appTheme={appTheme} /> */}
            {/* <ProblemSolving appTheme={appTheme} /> */}
=======
        <Container fluid id="page-quizGenerator" className="page page-quizGenerator px-3" style={{ 'width': `${window.innerWidth - 300}px`}}>
            <TestGenerator appTheme={appTheme} />
>>>>>>> 3d32f55636aa6d97d2a8c738b840f9b0e2b66906
        </Container>
    );
};