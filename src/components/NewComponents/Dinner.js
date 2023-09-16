import { Box, Heading, Image, Text } from 'grommet'
import icecream from '../assets/icecream.jpg'

function Family() {
  return (
    <Box
      pad={{vertical: 'medium' }}
    >
      <Box gap='medium' pad='medium'>
        <Heading color='red'>Familu</Heading>
        <Text size='large'>Food time</Text>
        <Text>Its been a wonderful journey with you. I hope to do many more romantic gestures foryou. Hope you had a wonderful day basking in my love like I know you did in yours.</Text>
      </Box>
      <Box
        background='red'
        pad='large'
        gap='large'
      >
        <Box><Image src={icecream} /></Box>
      </Box>
    </Box>
  )
}

export default Family