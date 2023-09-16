import { Box, Heading, Image, Text } from 'grommet'
import boysyoung from '../assets/boysyoung.jpg'
import boysnow from '../assets/boysnow.jpg'
import familyv1 from '../assets/familyv1.jpg'
import familyv2 from '../assets/familyv2.jpg'

function Family() {
  return (
    <Box
      pad={{vertical: 'medium' }}
    >
      <Box gap='medium' pad='medium'>
        <Heading color='red'>Family</Heading>
        <Text size='large'>We are family but not that sister sledge song!</Text>
        <Text>So we created two wonderful people. Its crazy. And now they have the AUDACITY to actually get bigger. SMH</Text>
      </Box>
      <Box
        background='red'
        pad='large'
        gap='large'
      >
        <Box><Image src={boysyoung} /></Box>
        <Box><Image src={boysnow} /></Box>
      </Box>
      <Box
        background='white'
        pad='large'
        gap='large'
      >
        <Box><Image src={familyv1} /></Box>
        <Box><Image src={familyv2} /></Box>

      </Box>
      <Box height='small' background='red'></Box>
    </Box>
  )
}

export default Family