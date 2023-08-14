import { redirect, useNavigate } from "react-router-dom"
import supabaseClient from "../supabaseClient"
import { Box, Button, Form, FormField, Heading, Paragraph } from "grommet"

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
  return (
    <Box>
      <Heading>Welcome to Beyhive</Heading>
      <Paragraph>
        Let's get started by creating a username:
      </Paragraph>
      <Form>
        <FormField>
          Username
        </FormField>
        <Paragraph>
          This is the namepeope will see you as on the message board
        </Paragraph>
        <Button label="Submit"/>
      </Form>
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