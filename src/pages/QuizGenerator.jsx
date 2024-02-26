import "../assets/css/quizGenerator.css";
import { Container } from "react-bootstrap";
import TestGenerator from "../components/TestGenerator";
import Enumeration from "../components/questionTypes/Enumeration";
import Essay from "../components/questionTypes/Essay";
import MultipleAnswer from "../components/questionTypes/MultipleAnswer";
import MultipleChoice from "../components/questionTypes/MultipleChoice";
import ShortAnswer from "../components/questionTypes/ShortAnswer";
import ProblemSolving from "../components/questionTypes/ProblemSolving";

export default function QuizGenerator({appTheme}) {
    
    return (
        <Container fluid id="page-home" className="page page-home px-3" style={{ 'width': `${window.innerWidth - 300}px`}}>
            <TestGenerator appTheme={appTheme} />
            <Enumeration appTheme={appTheme} />
            <Essay appTheme={appTheme} />
            <MultipleAnswer appTheme={appTheme} />
            <MultipleChoice appTheme={appTheme} />
            <ShortAnswer appTheme={appTheme} />
            <ProblemSolving appTheme={appTheme} />
        </Container>
    );
};