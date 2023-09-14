import { useEffect, useState } from 'react'
import { Accordion, AccordionPanel, Box, Button, Heading, Layer, Paragraph, TextInput } from 'grommet'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { riddlePlay } from './atoms'
import './it.css'
import Sza from '../assets/sza.jpg'

const list = [
    {
        riddlel1: 'Im a plan for adventure, a guide to explore,',
        riddlel2: 'Listing destinations, whats in store.',
        riddlel3: 'From start to finish, Ill show the way,',
        riddlel4: 'Mapping out travels, day by day.',
        answer: 'itinerary'
    },
    {
        riddlel1: 'In autumns embrace, I am brought to light,',
        riddlel2: 'Through toil and effort, Im gathered with might.',
        riddlel3: 'A bountiful yield, a reward for the sown,',
        riddlel4: 'A seasons treasure, when nature has shown.',
        answer: 'harvest'
    },
]

const answerkey = ["boys", "harvest", "massage", "candle", "lunch", "boys", "gifts", "escape", "dinner"]

function Itinerary() {
    const [hasPlayed, setHasPlayed] = useState(true)
    const [showBox, setShowBox] = useState(false)
    const [played, setPlayed] = useRecoilState(riddlePlay)
    const [big, setBig] = useState(false)
    const [answer, setAnswer] = useState('')
    const [showResult, setShowResult] = useState(false);

    const biggen = () => {
        setBig(!big)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasPlayed(false);
        }, 10000);

        const secondTimer = setTimeout(() => {
            setShowBox(true)
        }, 7000)

        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer)
        }
    }, [])

    const handleAnswerChange = (event, setAnswer) => {
        setAnswer(event.target.value);
    };

    const handleAnswerSubmit = (answerValue, answer) => {
        if (answerValue.trim().toLowerCase() === answer) {
            setShowResult(true);
        }
    };

    const containStyle = {
        visibility: showBox ? 'visible' : 'hidden'
    }

    const biggie = [
        {
            blur: false,
            blurImage: Sza,
            time: '7-8',
            blurHint: 'breaky',
            blurCorrect: "Harvest Breakfast Cafe",
            riddlel1: 'In autumns embrace, I am brought to light,',
            riddlel2: 'Through toil and effort, Im gathered with might.',
            riddlel3: 'A bountiful yield, a reward for the sown,',
            riddlel4: 'A seasons treasure, when nature has shown.',
            answer: 'boys',
            answerValue: answer,
            answerUpdate: setAnswer,
            riddleAnswer: false,
            riddlePic: Sza,
            riddleAddress: '123 America',
            riddleBlurb: "Amazing time here"
        },
    ]

  return (
    
    <Box>
        {hasPlayed && (
            <Layer full animation='fadeIn' background='pink'>
                <Box fill align='center' justify='center' gap='xlarge'>
                    <Box background='purple' pad='medium' margin='medium' round gap='medium'>
                        <Heading textAlign='center' level='2' color='turquoise'>{list[0].riddlel1}</Heading>
                        <Heading textAlign='center' level='2' color='turquoise'>{list[0].riddlel2}</Heading>
                        <Heading textAlign='center' level='2' color='turquoise'>{list[0].riddlel3}</Heading>
                        <Heading textAlign='center' level='2' color='turquoise'>{list[0].riddlel4}</Heading>
                        <Heading textAlign='center' level='2' color='turquoise'>What am I?</Heading>
                    </Box>
                    <Box
                        background='purple'
                        pad='medium'
                        margin='medium'
                        round
                        gap='medium'
                        style={containStyle}
                    >
                        <Heading textAlign='center' level='2' color='turquoise'>An Itinerary!</Heading>
                        <Heading textAlign='center' color='turquoise'>🤣😂🤣😂</Heading>
                        <Box >
                            <Button primary color='pink' label='Close' onClick={() => setHasPlayed(false)}/>
                        </Box>
                    </Box>
                </Box>
            </Layer>
        )}
        <Box gap='medium'>
            <Heading>Riddle Me This!</Heading>
            <Paragraph>Welcome to the Riddle laden itinerary. You are given the entire itinerary but only if you can solve the riddles. After each location you are given a hint for the next riddle.</Paragraph>

            <Accordion
                multiple={true}
            >
                <AccordionPanel
                    background='black'
                    label='first event'
                    height='xxsmall'
                    pad='medium'
                ><Box>1</Box></AccordionPanel>
                <AccordionPanel
                    background='black'
                    label='second event'
                    height='5rem'
                    pad='medium'
                ><Box>1</Box></AccordionPanel>
                {biggie.map((element, index) => (
                    <AccordionPanel
                        background={element.blur ? `url(${element.blurImage})` : 'black'}
                        label={element.blurHint}
                        height='5rem'
                        pad='medium'
                        key={index}
                    >
                        {element.riddleAnswer 
                            ? "true"
                            : (
                                <Box
                                    background='purple'
                                    margin='medium'
                                    pad='medium'
                                    round
                                >
                                    <Paragraph textAlign='center' color='turquoise' size='small'>{element.riddlel1}</Paragraph>
                                    <Paragraph textAlign='center' color='turquoise' size='small'>{element.riddlel2}</Paragraph>
                                    <Paragraph textAlign='center' color='turquoise' size='small'>{element.riddlel3}</Paragraph>
                                    <Paragraph textAlign='center' color='turquoise' size='small'>{element.riddlel4}</Paragraph>
                                    <Paragraph textAlign='center' color='turquoise' size='small'>What am I?</Paragraph>
                                    <Box
                                        gap='medium'
                                        margin='medium'
                                    >
                                        <TextInput value={element.answer} onChange={(event) =>handleAnswerChange(event, element.answerUpdate)} />
                                        <Box direction='row' justify='between'>
                                            <Button primary label='Hint' />
                                            <Button primary color='pink' label="Submit" onClick={() => handleAnswerSubmit(element.answerUpdate)} />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        }
                    </AccordionPanel>
                ))}
            </Accordion>

            <Box
                background='purple'
                margin='medium'
                pad='medium'
                round
            >
                <Paragraph textAlign='center' color='turquoise'>{list[0].riddlel1}</Paragraph>
                <Paragraph textAlign='center' color='turquoise'>{list[0].riddlel2}</Paragraph>
                <Paragraph textAlign='center' color='turquoise'>{list[0].riddlel3}</Paragraph>
                <Paragraph textAlign='center' color='turquoise'>{list[0].riddlel4}</Paragraph>
                <Paragraph textAlign='center' color='turquoise'>What am I?</Paragraph>
                <Box gap='medium'>
                    <TextInput value={answer} onChange={handleAnswerChange} />
                    <Box>
                        <Button primary color='pink' label="Submit" onClick={handleAnswerSubmit} />
                    </Box>
                </Box>
                
            </Box>

            <Box
                className='bl'
                height='xsmall'
            >
                <Box className='ne' fill>
                    <Paragraph color='white'>Hello World</Paragraph>
                </Box>
            </Box>
        </Box>
        
    </Box>
  )
}

export default Itinerary