import { Box, Image, Paragraph, Text } from 'grommet'
import { Share, ShareOption } from 'grommet-icons'

function Thread() {
  return (
    <Box direction='column' fill='horizontal'>
        <Box>Thread Title</Box>
        <Box>Categories breadcrumbs</Box>
        <Box>Pagination</Box>
        <Box>
            <PostOG />
        </Box>
        <Box>
          {data.map((item, index) => (
            <Box key={index}>
              {index}
              <Post  item={item}/>
            </Box>
          ))}
        </Box>
    </Box>
  )
}

const data = [
  {
    avy: 'https://www.resetera.com/data/avatar/31671368935/35581-m.jpg',
    name: 'Scott Lufkin',
    member: 'member',
    date: '41 minutes ago',
    postCount: '21',
    content: 'How are you getting a consisent 80% chance to hit something 9 times in a row? Even with advantage that should be tough to get at lower levels against a normal enemy. 50-60% is much, much more common - thats needing an 10 maybe an 8 or higher to hit on a d20. And 80% chance to hit means you only need to roll a 4...? Also, make sure you arent targetting the ground - thats a spell that will 100% let you target the ground if you want.'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31655021158/16459-m.jpg',
    name: 'Astral',
    member: 'member',
    date: '40 minutes ago',
    postCount: '22',
    content: 'Im kind of interested in the game and might get it once its out on PS5. Out of curiosity, can you do some kind of pacifist run?'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31671368935/35581-m.jpg',
    name: 'ThisIsMyDogKyle',
    member: 'member',
    date: '31 minutes ago',
    postCount: '23',
    content: 'There is a sex/nudity toggle, though I dont know exactly how it works, I read it fades to black for sex scenes, not sure beyond that. EDIT: Found a reddit post saying it also keeps them in their undies'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31687191656/11353-m.jpg',
    name: 'Buckle',
    member: 'member',
    date: '31 minutes ago',
    postCount: '24',
    content: 'Larian will probably never do a full voiced protagonist and Id say thats the right call. The role playing is better without having a predetermined voice and allows them to keep a lot of varied dialog options aswell to help define your character more. This is something Fallout 4 was really terrible at. All the sole survivors felt and sounded very samey. It was just nowhere as fun as it was in 3 and New Vegas, especially on multiple playthroughs so overjoyed that Bethesda is going back for Starfield.'
  },
  {
    avy: 'https://www.resetera.com/styles/resetera/images/resetera-default-avatar-transparent.png?_v=1',
    name: 'Talka',
    member: 'member',
    date: '30 minutes ago',
    postCount: '25',
    content: 'Not really familiar enough with BG3/D&D to know how exactly my success probabilities are getting calculated, but Ive had a bunch of encounters in a row with lots of high ground, plus my wizard has had some other status condition I cant remember (true strike? true something?). Next encounter Ill screenshot what Im seeing I guess. Actually, related question, is there a way to see how the success probabilities are calculated? All I see is the success probability and then any green/red modifiers, but not the underlying math.'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31632470956/27-m.jpg',
    name: 'Morrigan',
    member: 'member',
    date: 'July 23',
    postCount: '26',
    content: 'Thanks for the explanation. About the cut scenes, you say it plays in full screen, so it shows only player 1 if the player character is part of the cut scene, then?'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31526147237/14647-m.jpg',
    name: 'antispin',
    member: 'member',
    date: 'July 23',
    postCount: '27',
    content: 'Oh. Were we discussing cinematics? My bad then, just woke up. I thought we were talking mechanics and/or world reactions to actions. I do prefer a show, not tell approach. I also prefer mute protags. Sorry! It’s just easier for me to roleplay if the protag is mute. Otherwise it feels like watching an interactive show. That’s just a personal preference though, not saying it’s how things ought to be. Anyway, this game and the upcoming Starfield has me more excited for the next Mass Effect.'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31659490186/34325-m.jpg',
    name: 'samoscratch',
    member: 'member',
    date: 'July 23',
    postCount: '28',
    content: 'Sorry if already asked but is there some skill or bonus for small parties like lone wolf? I always love trying smaller parties.'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31513308201/35042-m.jpg',
    name: 'azfaru',
    member: 'mod',
    date: 'July 23',
    postCount: '29',
    content: 'Yeah tempted to go controller cos exploring feels so good on it. But it feels like it was designed by another team'
  },
  {
    avy: 'https://www.resetera.com/data/avatar/31509035433/8608-m.jpg',
    name: 'moustascheman',
    member: 'member',
    date: 'July 23',
    postCount: '30',
    content: 'Is there a specific encounter youre having trouble with? Generally the way you should handle fights against multiple enemies is to limit the amount of actions (attacks) they can take. For example if youre fighting multiple archers, you may want to end your turn outside of their LoS which means theyll likely have to spend their entire turn dashing up to you in order to take a shot. Focus firing on enemies one at a time is essential: a dead enemy is one that cant attack you. Aside from that, you might want to have a high AC party member in the frontlines to tank. If youre not good at role, you can build Laezel as one or even Shadowheart (shes going to be 2 AC behind a fighter or paladin). Its very much possible to hit 20+ AC early on, especially with the right buffs (shield of faith + warding bond).'
  },
]

function Post ({ item }) {
  const { avy, name, member, date, postCount, content } = item
  
  return (
    <Box direction='row'>
      <Box
        direction='column'
        width='7rem'
        align='center'
        pad={{ horizontal: 'medium', top: 'small' }}
      >
        <Box
          height='xxsmall'
          width='xxsmall'
        >
          <Image
            fit='cover'
            src={avy}
          />
        </Box>
        <Box>
          <Text weight='bold'>{name}</Text>
        </Box>
        <Box>
          <Text size='small'>{member}</Text>
        </Box>
      </Box>
      <Box 
        direction='column'
        flex
        background='brand'
      >
        <Box direction='row' justify='between' pad='small'>
          <Box>{date}</Box>
          <Box direction='row' gap='small'>
            <ShareOption />
            <Text>{postCount}</Text>
          </Box>
        </Box>
        <Box pad='small'  border>
          <Paragraph fill>{content}</Paragraph>
        </Box>
      </Box>
    </Box>
  )
}

function PostOG () {
  return (
    <Box direction='row'>
      <Box
        direction='column'
        width='7rem'
        align='center'
        pad={{ horizontal: 'medium', top: 'small' }}
      >
        <Box
          height='xxsmall'
          width='xxsmall'
        >
          <Image
            fit='cover'
            src='https://www.resetera.com/data/avatar/31686616689/124534-m.jpg'
          />
        </Box>
        <Box>
          <Text weight='bold'>Haregan</Text>
        </Box>
        <Box>
          <Text size='small'>Member</Text>
        </Box>
      </Box>
      <Box 
        direction='column'
        flex
        background='brand'
      >
        <Box direction='row'>
          <Box>Posted ago</Box>
          <Box
            direction='row'
          >Share | Post Number</Box>
        </Box>
        <Box>Post</Box>
      </Box>
    </Box>
  )
}

export default Thread