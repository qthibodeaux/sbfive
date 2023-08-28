import { useState } from "react";
import { useAuth } from "../useAuth"
import { redirect, useNavigate } from "react-router-dom"
import supabaseClient from "../supabaseClient"
import { Box, Button, Form, FormField, Heading, Paragraph, TextInput  } from "grommet"

export async function welcomeLoader () {
  const {
    data: { user }
  } = await supabaseClient.auth.getUser();
  if (!user) {
    return redirect("/");
  }
  const { data }   = await supabaseClient
    .from("user_profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single()
  if (data?.username) {
    return redirect("/");
  }
}

function Success () {
  const sess = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [serverError, setServerError] = useState("")
  const [formIsDirty, setFormIsDirty] = useState(false)

  return (
    <Box
      border
      fill
      justify='center'
      align='center'
      pad='medium'
    >
      <Box
        width='large'
        gap='medium'
      >
        <Heading>Welcome to Beyhive</Heading>
        <Paragraph margin={{ vertical: 'small' }}>
          Let's get started by creating a username:
        </Paragraph>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            supabaseClient
              .from("user_profiles")
              .insert([
                {
                  user_id: sess.session?.user.id || "",
                  username: username
                }
              ])
              .then(({ error }) => {
                if (error) {
                  setServerError(`Username "${username}" is already taken`);
                } else {
                  const target = localStorage.getItem("returnPath") || "/";
                  localStorage.remoteItem("returnPath");
                  navigate(target)
                }
              })
          }}
        >
          <FormField width='medium'>
            <TextInput  
              placeholder='Username'
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </FormField>
          <Paragraph margin={{ vertical: 'small' }}>
            This is the namepeope will see you as on the message board
          </Paragraph>
          <Button margin={{ vertical: 'small' }} label="Submit"/>
        </Form>

        <Box>
          {username}
        </Box>
      </Box>
    </Box>
  )
}

function validateUsername (username) {
  if (!username) {
    return "Username is required";
  }
  const regex = /^[a-zA-Z0-9_]+$/;
  if (username.length < 4) {
    return "Username must be at least 4 characters long";
  }
  if (username.length > 14) {
    return "Username must be less than 15 characters long";
  }
  if (!regex.test(username)) {
    return "Username can only contain letters, numbers, and underscores";
  }
  return undefined;
}

export default Success