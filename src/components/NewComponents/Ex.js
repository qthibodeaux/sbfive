import React, { useState } from 'react';
import { Box, Button, TextInput } from 'grommet';

function Ex () {
    const [answer, setAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleAnswerSubmit = () => {
        if (answer.trim().toLowerCase() === 'correct') {
        setShowResult(true);
        }
    };

    const handleReset = () => {
        setAnswer('');
        setShowResult(false)
    };

    return (
        <Box align="center" pad="large" background='dark-1'>
                <Box gap='medium'>
                    <p>What is the correct answer?</p>
                    <TextInput value={answer} onChange={handleAnswerChange} />
                    <Box direction='row'>
                        <Button label="Submit" onClick={handleAnswerSubmit} />
                        <Button label="Reset" onClick={handleReset} />
                    </Box>
                </Box>
            {showResult && (
                <Box animation="fadeIn" background="light-2" width="100%" height="200px" margin="medium">
                    <p>Correct Answer!</p>
                </Box>
            )}
            <Box pad='medium'>
                {answer ? <Box>{answer}</Box> : ''}
            </Box>
        </Box>
    )
}

export default Ex