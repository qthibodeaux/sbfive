import { Anchor, Box, Footer, Text } from 'grommet'
import { Grommet } from 'grommet-icons'

function Footy () {
  return (
    <Footer background="dark-1" pad='large'>
      <Box direction='row-responsive' gap='xsmall'>
        <Box align='center' gap='small'>
          <Grommet color="brand" size='large'/>
          <Text alignSelf='center' color='brand' weight='bold'>
            grommet.io
          </Text>
        </Box>
      </Box>
      <Box direction='row-responsive' gap='xlarge'>
        <Box gap='medium'>
          <Text weight='bold' size='small'>
            App
          </Text>
          <Box>
            <Anchor href='/' size='small' color='white' label='home'/>
            <Anchor href='/' size='small' color='white' label='beta'/>
            <Anchor href='/' size='small' color='white' label='sponsors'/>
          </Box>
        </Box>
        <Box gap='medium'>
          <Text weight='bold' size='small'>
            Legal
          </Text>
          <Box>
            <Anchor href='/' size='small' color='white' label='terms'/>
            <Anchor href='/' size='small' color='white' label='privacy'/>
            <Anchor href='/' size='small' color='white' label='security'/>
          </Box>
        </Box>
        <Box gap='medium'>
          <Text weight='bold' size='small'>
            Company
          </Text>
          <Box>
            <Anchor href='/' size='small' color='white' label='about'/>
            <Anchor href='/' size='small' color='white' label='press'/>
            <Anchor href='/' size='small' color='white' label='jobs'/>
          </Box>
        </Box>
      </Box>
    </Footer>
  )
}

export default Footy