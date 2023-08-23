import { Link, Outlet } from 'react-router-dom'
import { Box, Heading  } from 'grommet'

function MessageBoard() {

  return (
    <Box
      direction='column'
      justify='center'
      align='center'
      gap='medium'
      height='100vh'
      border
    >
      <Link to='/1'>
        <Heading level='2' className='message-board-header-link'>Message Board</Heading>
      </Link>
      
      <Outlet />
    </Box>
  )
}

export default MessageBoard