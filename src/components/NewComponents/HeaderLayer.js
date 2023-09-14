import { Box, Button, Layer, Header, Heading } from 'grommet'
import { FormClose } from 'grommet-icons'
import { useSetRecoilState } from 'recoil'

function HeaderLayer({ closer }) {
  return (
    <Layer full animation='fadeIn' background='dark-1'>
      <Header
            direction='row'
            pad='medium'
            align='center'
            justify='end'
        >
            <Button color='dark-1' icon={<FormClose color='pink'/>} onClick={() => closer()}/>
        </Header>
    </Layer>
  )
}

export default HeaderLayer