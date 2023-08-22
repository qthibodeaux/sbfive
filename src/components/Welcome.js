import { useMemo, useState } from 'react'
import { Box, Button, Form, FormField, Heading, Paragraph, TextInput } from 'grommet'
import { redirect, useNavigate } from 'react-router-dom'
import supabaseClient from '../supaClient'
import useAuth from '../hooks/useAuth'

export async function welcomeLoader() {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  if (!user) {
    return redirect("/");
  }
  const { data } = await supabaseClient
    .from("user_profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();
  if (data?.username) {
    return redirect("/");
  }
}

function Welcome() {
  const [value, setValue] = useState({})
  const [userName, setUserName] = useState("");
  const [serverError, setServerError] = useState("");
  const [formIsDirty, setFormIsDirty] = useState(false);
  const invalidString = useMemo(() => validateUsername(userName), [userName]);
  const navigate = useNavigate()
  const { auth } = useAuth()

  return (
    <Box
      align='center'
      justify='center'
    >
      <Box 
        width="large"
        pad='small'
        gap='small'
        align='center'
      >
        <Heading>Welcome to the Ship!</Heading>
        <Paragraph>Let's get started by creating a username:</Paragraph>
        
        <Box
          width="80%"
          align='center'
          pad='small'
        >
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({value}) => {
              supabaseClient 
                .from("user_profiles")
                .insert([{
                  user_id: auth.session?.user.id || "",
                  username: userName,
                }
              ])
              .then(({ error }) => {
                if (error) {
                  setServerError(`Username "${userName}" is already taken`)
                } else {
                  const target = localStorage.getItem("returnPath") || "/";
                  localStorage.removeItem("returnPath");
                  navigate(target)
                }
              })
            }}
          >
            <Box
              gap='medium'
              margin={{ bottom: 'xlarge' }}
            >
              <FormField name="username" htmlFor='text-input-id' label="Name">
                <TextInput 
                  id='text-input-id'
                  name="username"
                  value={userName}
                  onChange={(event) => {
                    setUserName(event.target.value)
                    if (!formIsDirty) {
                      setFormIsDirty(true)
                    }
                    if (serverError) {
                      setServerError("")
                    }
                  }}
                />
                {formIsDirty && (invalidString || serverError) && (
                  <Paragraph>
                    {serverError || invalidString}
                  </Paragraph>
                )}
              </FormField>
              <Paragraph>
                This is the name people will see when you as on the Message board.
              </Paragraph>
              <Box direction='row' gap='medium'>
                <Button primary type='submit' label='Submit'/>
              </Box>
            </Box>
          </Form>
        </Box>

        <Button primary label='Sign out' onClick={() => supabaseClient.auth.signOut() }/>
      </Box>
    </Box>
  )
}

function validateUsername (username) {
  if (!username) {
    return "Username is required"
  }
  const regex = /^[a-zA-Z0-9_]+$/;
  if (username.length < 4) {
    return "Username must be at least 4 characters long"
  }
  if (username.length > 14) {
    return "Username must be less than 15 characters long"
  }
  if (!regex.test(username)) {
    return "Username can only contain letters, numbers, and underscores"
  }
}

export default Welcome