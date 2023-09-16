import { Box, Heading, Image, Text } from 'grommet'
import bs from '../assets/blueshirt.jpg'
import utd from '../assets/utd.jpg'

function Breakfast() {
  return (
    <Box
      pad={{vertical: 'medium' }}
    >
      <Box gap='medium' pad='medium'>
        <Heading color='red'>Breakfast</Heading>
        <Text size='large'>Blue Shirt</Text>
        <Text>The first meal of the day. From from the first meet and greet at UTDallas to falling in lvoe in phase 8, we been together. So we start at UTDallas and all of its oddities with friend, fun, and food.</Text>
        <Text>Todays breakfast is a hearty breakfast to fill your heart.</Text>
      </Box>
      <Box
        background='red'
        pad='large'
        gap='large'
      >
        <Box><Image src={utd} /></Box>
        <Box><Image src={bs} /></Box>
        </Box>
    </Box>
  )
}

export default Breakfast