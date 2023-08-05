import { Box, Image, Heading, Paragraph, Stack, Text } from "grommet"
import { Article, Chat, ChatOption, Gamepad, Music, Run } from "grommet-icons"
import Thread from "./Thread"
import { useAuth } from "../useAuth"

function Main() {
  const { sess } = useAuth()

  if (sess) {
    return (
      <Box
        border
      >
        <Box
          align="center"
          alignSelf="center"
          justify="center"
          width='xlarge'
        >
          Not Logged In
          <Box
            height='xsmall'
            width='100%'
            style={{ background: "linear-gradient(to bottom right, #342628, #FEAA00 90%)" }}
          >
            <Box border justify="center" flex pad='medium'>
              <Heading color='white' >
                Beyhive
              </Heading>
            </Box>
          </Box>
          <Heading>
            Join The Conversation
          </Heading>
          <Heading>
            Todo: add anchor tags to click categories, pics, and titles
          </Heading>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box
        border
      >
        Logged In
        <Box>
          New stuff
          <Box
            direction='column'
            align="center"
            alignSelf="center"
            justify="center"
            width='xlarge'
            gap='small'
          >
            <Box direction='row' gap='small'>
              <Sect />
              <Sect />
            </Box>
            <Box direction='row' gap='small'>
              <Sect />  
              <Sect />
            </Box>
          </Box>
          <Box
            align="center"
            alignSelf="center"
            justify="center"
            width='xlarge'
          >
            <Thread />
          </Box>
        </Box>
      </Box>
    )
  }
}

function Sect () {
  return (
    <Box
      direction='column'
      pad='medium'
      gap='xsmall'
      background='brand'
      round='small'
      height='15rem'
    >
      <Heading
        level='4'
        color='status-warning'
      >
        Category
      </Heading>
      <Box direction='row'>
        <Box
          width='xsmall'
          height='4rem'
        >
          <Image
            fit='cover'
            src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
          />
        </Box>
        <Box
          direction='column'
          pad={{ left: 'xsmall' }}
        >
          <a href="asfd" id='mytag' style={{ color: 'green' }}>PCGames Insider: 47% of Chinese popu...</a>
          <Box
            direction='row'
            justify='between'
          >
            <Box><Text size='xsmall'>OP: Chairmanchuck</Text></Box>
            <Box><Text size='xsmall'>Post: 243</Text></Box>
          </Box>
        </Box>
      </Box>
      <Box direction='column' gap='xsmall'>
        <Box direction='row'>
          <Box
            height='2.5rem'
            width='2.5rem'
          >
            <Image 
              fit='cover'
              src='https://www.resetera.com/data/avatar/31643590303/44781-m.jpg'
            />
          </Box>
          <Box direction='column' pad={{ left: 'xsmall' }}>
            <a href='asdf' style={{ color: 'green' }}>2023 FIFA Women's World Cup</a>
            <Box direction='row'>
              <Text size='xsmall'>July 31</Text>   <Text size='xsmall'> <a href="asdf" style={{ color: 'orange' }}>JKwon </a> </Text>
            </Box>
          </Box>
        </Box>
        <Box direction='row'>
          <Box
            height='2.5rem'
            width='2.5rem'
          >
            <Image 
              fit='cover'
              src='https://www.resetera.com/data/avatar/31675460783/5617-m.jpg'
            />
          </Box>
          <Box direction='column' pad={{ left: 'xsmall' }}>
            <a href='asdf' style={{ color: 'green' }}>B/S/T Feedback Thread | Read the OP Please</a>
            <Box direction='row'>
              <Text size='xsmall'>July 31</Text>   <Text size='xsmall'> <a href="asdf" style={{ color: 'orange' }}>Cloggerdude</a> </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main