import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Heading, Image, Text } from 'grommet'
import { CaretDownFill, CaretUpFill } from 'grommet-icons'
import supabaseClient from '../supabaseClient'

function Category() {
    const { category } = useParams()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [jsonData, setJsonData] = useState(null)

    const filterSet = ['Hip Hop', 'Sports']


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: postData, error: postError } = await supabaseClient
                .from('thre')
                .select(`
                    category_id,
                    categories ( id, name )
                `)
                .eq('categories.name', 'Music')

                setData(postData)
                setJsonData(postData)

                if (postError) {
                    console.error('Error from supabase')
                    return;
                  }
            } catch (error) {
                console.error('Error', error.message)
            }
        }

        fetchData()
    }, [])

  return (
    <Box

    >
        <Box
            direction='column'
            width='xlarge'
            alignSelf='center'
        >
            <Box>
                Banner
                <Heading>{category}</Heading>
            </Box>
            <Box
                direction='column'
                border
            >
                    <h1>JSON Data from Supabase</h1>
                   <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                   
                <Box>
                    Sticky Threads
                    <ThreadRowOG />
                </Box>
                <Box>
                    <Box
                        justify='between'
                        direction='row'
                        pad={{ horizontal: 'small', vertical: 'small' }}
                     >
                        <Text textAlign='center'>Threads { category }</Text>
                        <Button primary label='New Thread'/>
                    </Box>
                    <ThreadList />
                </Box>
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
        <Box
            border
        >
            {data.map((data, key) => (
                <ThreadRow key={key} image={data.image} threadTitle={data.threadTitle} op={data.op} lastPost={data.lastPost} postCount={data.postCount}/>
            ))}
        </Box>
    ) 
}

function ThreadRow ({image, threadTitle, op, lastPost, postCount}) {
    return (
        <Box 
            background='brand'
            direction='row'
            justify='between'
            border
        >
            <Box
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
            </Box>
            <Box
                direction='row'
                align='center'
                pad='small'
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