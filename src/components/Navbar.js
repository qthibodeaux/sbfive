import { Anchor, Avatar, Box, Button, Header, ResponsiveContext } from "grommet"
import { LinkDown , LinkUp, Menu as MenuIcon, User } from "grommet-icons"
import { Link } from 'react-router-dom'
import { useAuth } from "../useAuth"
import supabaseClient from "../supabaseClient"

function Navbar() {
    const { sess } = useAuth()
    if (!sess) {
        return (
            <Header background='dark-3' pad='small' justify='center' >
                <Box width='50%' justify='between' direction='row'>
                    <Box align="center" justify="center" direction="row">
                        
                        <Box>
                            BeyHive
                        </Box>
                    </Box>
                    <Box align="center" justify='center' direction="row" gap='xsmall'>
                        <Link to='registration' style={{ color: 'white', fontWeight: 'bold' }}>Log in</Link>
                        <Link to='registration' style={{ color: 'white', fontWeight: 'bold' }}>Register</Link>
                    </Box>
                </Box>
            </Header>
        )
    } else {
        return (
            <Header background='dark-3' pad='small' justify='center' >
                <Box width='50%' justify='between' direction='row'>
                    <Box align="center" justify="center" direction="row">
                        
                        <Box>
                            BeyHive
                        </Box>
                    </Box>
                    <Box align="center" justify='center' direction="row" gap='xsmall'>
                        <Avatar>
                            <MenuIcon />
                        </Avatar>
                        <Button primary label="Sign out" onClick={ () => supabaseClient.auth.signOut() }/>
                    </Box>
                </Box>
            </Header>
          )
        }
    }
  

export default Navbar

/*
<Header background='dark-3' pad='small' justify='center' >
                <Box width='50%' justify='between' direction='row'>
                    <Box align="center" justify="center" direction="row">
                        
                        <Box>
                            BeyHive
                        </Box>
                    </Box>
                    <Box align="center" justify='center' direction="row" gap='xsmall'>
                        <Link to='registration' style={{ color: 'white', fontWeight: 'bold' }}>Log in</Link>
                        <Link to='registration' style={{ color: 'white', fontWeight: 'bold' }}>Register</Link>
                    </Box>
                </Box>
            </Header>
            */