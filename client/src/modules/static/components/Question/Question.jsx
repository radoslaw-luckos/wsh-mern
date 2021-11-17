import React, { useState } from 'react'
import { ImPointRight } from 'react-icons/im';
import './Question.scss';

const Question = ({ question, answer }) => {

    const [answerOpened, setAnswerOpened] = useState(false);

    return (
        <li className='q-item'>
            <div className='q-item__question' onClick={() => setAnswerOpened(!answerOpened)}>
                <ImPointRight className='icon' />
                <h3>{question}</h3>
            </div>
            {answerOpened && <p className='q-item__answer'>{answer}</p>}
        </li >
    )
}

export default Question
