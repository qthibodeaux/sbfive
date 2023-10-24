import { useEffect, useState } from "react"
import { Box, Image, Heading, Text, Button } from "grommet"
import supabaseClient from "../supabaseClient"

function LoggedIn() {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [jsonData, setJsonData] = useState(null)
  const filter = ['Hip Hop', 'Sports', 'News', 'Video Games']

  async function getData () {
    setLoading(true)
    
    try {
      const {data, error} = await supabaseClient
      .from('user_profiles')
      .select(`
        id,
        thre ( 
          id,
          thread_title,
          category_id,
          up_id
        )
      `)
    if (error) {
      throw error
    }

    setInfo(data)
    } catch (error) {
      console.error('Error fetching user profiles', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: postData, error: postError } = await supabaseClient
            .from('hot')
            .select(`
              id,
              thre ( 
                id,
                thread_title,
                category_id,
                up_id
              ),
              categories (
                id,
                name
              )
            `);

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

  const ordered = ['Hip Hop', 'Sports', 'Video Games', 'Music', 'News', 'Movies', 'Books', 'Electronics', 'Books']

  const sortData = data
    ? [...data].sort((a, b) => {
      const indexA = ordered.indexOf(a.categories.name)
      const indexB = ordered.indexOf(b.categories.name)
      return indexA - indexB
    })
    : [];

  return (
    <Box
        border
      >
        Logged In
        <Box>
          New stuff

          <Box>
            {data 
              ? <Box>
                  {data.map((element, index) => (
                    <Box
                      key={index}
                      direction="row"
                    >
                      <Box>{element.categories.name}</Box>
                      <Box>{element.thre.thread_title}</Box>
                    </Box>
                  ))}
                   <h1>JSON Data from Supabase</h1>
                   <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                   <div>
                    <h1>Sorted JSON Data from Supabase</h1>
                    <ul>
                      {sortData.map((item, value) => (
                        <li key={value}>{item.categories.name}</li>
                      ))}
                    </ul>
                  </div>
                  <Box>
                        
                  </Box>
                </Box>
              : <Box>Loading</Box>
            }
          </Box>
          
          <Box
            direction='column'
            align="center"
            alignSelf="center"
            justify="center"
            width='xlarge'
            gap='small'
          >
            <Box direction='row' gap='small'>
              <Sect />
              <Sect />
            </Box>
            <Box direction='row' gap='small'>
              <Sect />  
              <Sect />
            </Box>
          </Box>
          <Box
            align="center"
            alignSelf="center"
            justify="center"
            width='xlarge'
          >
            1 asfd
            <Box>
              Data from supabase
              {loading && <Box>Loading...</Box>}
              <ul>
                {info.map((profile, index) => (
                  <li key={index}>
                    {profile.username}
                  </li>
                ))}
              </ul>
            </Box>
            <Box>
              <Button primary disabled={loading} label='Get Data' onClick={getData}/>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

function Sect () {
    return (
      <Box
        direction='column'
        pad='medium'
        gap='xsmall'
        background='brand'
        round='small'
        height='15rem'
      >
        <Heading
          level='4'
          color='status-warning'
        >
          Category
        </Heading>
        <Box direction='row'>
          <Box
            width='xsmall'
            height='4rem'
          >
            <Image
              fit='cover'
              src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
            />
          </Box>
          <Box
            direction='column'
            pad={{ left: 'xsmall' }}
          >
            <a href="asfd" id='mytag' style={{ color: 'green' }}>PCGames Insider: 47% of Chinese popu...</a>
            <Box
              direction='row'
              justify='between'
            >
              <Box><Text size='xsmall'>OP: Chairmanchuck</Text></Box>
              <Box><Text size='xsmall'>Post: 243</Text></Box>
            </Box>
          </Box>
        </Box>
        <Box direction='column' gap='xsmall'>
          <Box direction='row'>
            <Box
              height='2.5rem'
              width='2.5rem'
            >
              <Image 
                fit='cover'
                src='https://www.resetera.com/data/avatar/31643590303/44781-m.jpg'
              />
            </Box>
            <Box direction='column' pad={{ left: 'xsmall' }}>
              <a href='asdf' style={{ color: 'green' }}>2023 FIFA Women's World Cup</a>
              <Box direction='row'>
                <Text size='xsmall'>July 31</Text>   <Text size='xsmall'> <a href="asdf" style={{ color: 'orange' }}>JKwon </a> </Text>
              </Box>
            </Box>
          </Box>
          <Box direction='row'>
            <Box
              height='2.5rem'
              width='2.5rem'
            >
              <Image 
                fit='cover'
                src='https://www.resetera.com/data/avatar/31675460783/5617-m.jpg'
              />
            </Box>
            <Box direction='column' pad={{ left: 'xsmall' }}>
              <a href='asdf' style={{ color: 'green' }}>B/S/T Feedback Thread | Read the OP Please</a>
              <Box direction='row'>
                <Text size='xsmall'>July 31</Text>   <Text size='xsmall'> <a href="asdf" style={{ color: 'orange' }}>Cloggerdude</a> </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

export default LoggedIn