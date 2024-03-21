import React from "react";
import { InlineMath } from 'react-katex';

const UseParseMathEq = (equation) => {
    const regex = /\\\((.*?)\\\)/g;

    const parts = equation.split(regex);

    const parsedEquation = parts.map((part, index) => {
        if (index % 2 !== 0) {
            return <InlineMath key={index} math={part} />;
        }
        else {
            return part;
        }
    });

    return parsedEquation;
};

export default UseParseMathEq;