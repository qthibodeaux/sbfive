import { Box, Image, List, Text } from 'grommet'
import { CaretDownFill, CaretUpFill } from 'grommet-icons'

function Category() {
  return (
    <Box direction='column'>
        <Box>Image | Category Name</Box>
        <Box
            direction='column'
        >
            <Box>
                <ThreadRowOG />
            </Box>
            <Box>
                Threads
                <ThreadList />
            </Box>
        </Box>
    </Box>
  )
}

const stickyData = [
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
]

const data = [
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
    { 
        image: 'https://www.resetera.com/data/avatar/31690529458/10448-m.jpg',
        threadTitle: 'Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?',
        op: 'mrmickfran',
        lastPost: 'January 6',
        postCount: '32'
    },
]

const sim = [{a:'1'},{a:'2'},{a:'3'}]

function ThreadList () {
    return (
        <Box>
            <List data={stickyData} margin='none'>
                {(thread) => (
                    <ThreadRow image={thread.image} threadTitle={thread.threadTitle} op={thread.op} lastPost={thread.lastPost} postCount={thread.postCount}/>
                )}
            </List>
            <List data={sim}>
                {(datum) => (
                    <Box
                        border
                        margin='0'
                    >{datum.a}</Box>
                )}
            </List>
        </Box>
    ) 
}

function ThreadRow ({image, threadTitle, op, lastPost, postCount}) {
    return (
        <Box 
            background='brand'
            direction='row'
            pad='small'
            gap='small'
        >
            <Box
                height='2.5rem'
                width='2.5rem'
            >
                <Image 
                    fit='contain'
                    src={image}
                />
            </Box>
            <Box
                direction='column'
            >
                <Box>
                    <Text size='small' weight='bold'>{threadTitle}</Text>
                </Box>
                <Box
                    direction='row'
                >
                    <Box><Text size='small'>{op}</Text></Box>
                    <Box><Text size='small'>{lastPost}</Text></Box>
                    <Box><Text size='small'>{postCount}</Text></Box>
                </Box>
            </Box>
            <Box
                direction='row'
            >
                <Box><CaretUpFill /></Box>
                <Box><CaretDownFill /></Box>
            </Box>
        </Box>
    )
}

function ThreadRowOG () {
    return (
        <Box 
            background='brand'
            direction='row'
            pad='small'
            gap='small'
        >
            <Box
                height='2.5rem'
                width='2.5rem'
            >
                <Image 
                    fit='contain'
                    src='https://www.resetera.com/data/avatar/31690529458/10448-m.jpg'
                />
            </Box>
            <Box
                direction='column'
            >
                <Box>
                    <Text size='small' weight='bold'>
                        Do you ever have a game that you would give like an 8 or a 9/10 but you would still prefer it over a 10/10 game?
                    </Text>
                </Box>
                <Box
                    direction='row'
                >
                    <Box><Text size='small'>mrmickfran</Text></Box>
                    <Box><Text size='small'>Last Post Time</Text></Box>
                    <Box><Text size='small'>Post Count</Text></Box>
                </Box>
            </Box>
            <Box
                direction='row'
            >
                <Box><CaretUpFill /></Box>
                <Box><CaretDownFill /></Box>
            </Box>
        </Box>
    )
}

export default Category