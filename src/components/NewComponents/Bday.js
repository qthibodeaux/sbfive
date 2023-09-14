import { useState } from 'react'
import { Box, Image } from 'grommet'
import HeaderLayer from './HeaderLayer'
import Navbar from './Navbar'
import Itinerary from './Itinerary'
import Jiso from '../assets/jiso.png'
import Ex from './Ex'

function Bday() {
    const [showSideBar, setShowSideBar] = useState(false)
    const opener = () => setShowSideBar(true)
    const closer = () => setShowSideBar(false)
  return (
    <Box
        background='linear-gradient(to top right, #FFC0CB, #8A2BE2, #40E0D0);'
    >
        <Navbar opener={opener} />
        {showSideBar && <HeaderLayer closer={closer} />}
        Bday

        Todo
        Hero Splash
        Gallery
        Itenerary

        Stretch
        scavenger hunt
        <Box
            align='center'
            justify='center'
        >
            <Box
                width='80%'
                background='dark-1'
                round
                pad='large'
            >
                <Image src={Jiso} alt='jessica' />
            </Box>
        </Box>
        
        <Box>
            <Itinerary />
        </Box>

        <Box>
            <Ex />
        </Box>
        <Box direction='column'>
            color
            <Box
                width='xsmall'
                height='xsmall'
                background='purple'
            ></Box>
            <Box
                width='xsmall'
                height='xsmall'
                background='pink'
                style={{ visibility: 'hidden' }}
            ></Box>
            <Box
                width='xsmall'
                height='xsmall'
                background='turquoise'
            ></Box>
        </Box>
    </Box>
  )
}

export default Bday