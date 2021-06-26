import React from 'react';
import styled from 'styled-components';

const Quiz = (props) => {

    return ( // 뷰 부분 
        <quizNumber>
            {props.quizNumber}
        </quizNumber>
    );
}

const quizNumber = styled.span`
    backgroundColor: "#fef5d4",
    padding: "5px 10px",
    borderRadius: "30px",
`;

export default Quiz;