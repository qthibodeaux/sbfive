import { Avatar, Box, Button, Header } from "grommet"
import { Menu } from "grommet-icons"

function Navbar({ opener }) {
  return (
    <Header
        direction='row'
        pad='medium'
    >
        <Avatar background='turquoise' size='medium'>J</Avatar>
        <Button color='dark-1' icon={<Menu color='pink'/>} onClick={() => opener()}/>
    </Header>
  )
}

export default Navbar