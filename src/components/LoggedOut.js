import { Box, Card, Grid, Heading, ResponsiveContext, Text } from 'grommet'
import { useContext } from 'react'

const cards = Array(20)
  .fill()
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

function LoggedOut() {
    const size = useContext(ResponsiveContext)
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
        <Box
            width='xlarge'
            alignSelf='center'
        >
            {size}
            <Grid
                columns={size !== 'small' ? 'small' : '100%'}
                gap="medium"
                pad={
                    size !== 'small' 
                    ? (
                        {
                            horizontal: 'none'
                        }
                    ) 
                    : (
                        {
                            horizontal: 'large'
                        }
                    )}
            >
                {cards.map((card, index) => (
                
                <Card pad="large" key={index}>
                    {card}
                </Card>
                ))}
            </Grid>
        </Box>
      </Box>
  )
}

export default LoggedOut