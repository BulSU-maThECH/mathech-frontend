import React from "react";
import { InlineMath } from 'react-katex';

const UseParseMathEq = (equation) => {
    // Regular expression to match text enclosed in '\(' and '\)'
    const regex = /\\\((.*?)\\\)/g;

    // Split the equation into parts based on the regular expression
    const parts = equation.split(regex);

    // Map each part, replacing the matched text with InlineMath components
    const parsedEquation = parts.map((part, index) => {
        // Check if the index is odd and the part matches the regular expression
        if (index % 2 !== 0) {
            console.log(part);
            // Enclose the math expression within InlineMath component
            return <InlineMath key={index} math={part} />;
        } else {
            // Return the original part if it doesn't match the condition
            return part;
        }
    });

    // Return the parsed equation as a React element
    return parsedEquation;
};

export default UseParseMathEq;