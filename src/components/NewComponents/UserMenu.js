import { Box, Button, Heading } from 'grommet'
import useAuth from '../hooks/useAuth'
import supabaseClient from '../supaClient'

function UserMenu() {
    const { auth } = useAuth()
  return (
    <Box
        direction='row'
        gap="small"
    >
        <Heading level='3'>Welcome {auth.profile?.username || 'dawg'}.</Heading>
        <Button onClick={() => supabaseClient.auth.signOut()} label='Logout'/>
    </Box>
  )
}

export default UserMenu