import { useEffect, useState } from 'react'
import { Box, Button } from 'grommet'
import { Auth } from '@supabase/auth-ui-react'
import supabaseClient from '../supabaseClient'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate  } from 'react-router-dom'
import { useAuth } from '../useAuth'

export const setReturnpath = () => {
  localStorage.setItem("returnPath", window.location.pathname)
}

function Registration() {
  const [authMode, setAuthMode] = useState("sign_in")
  const { sess } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (sess?.user) {
        navigate("../")
    }
  }, [sess])

  return (
    <Box
        border
        justify='center'
        align='center'
    >
        <Box
            width='large'
        >
            Banner
            <Box
                direction='row'
                justify='center'
                gap='medium'
                pad='medium'
            >
                <Button
                    primary
                    label="Login" 
                    onClick={() => {
                        setAuthMode("sign_in")
                        setReturnpath()
                    }}
                />
                <Button
                    primary
                    label="Sign Up"
                    onClick={() => {
                        setAuthMode("sign_up")
                        setReturnpath()
                    }}
                />
            </Box>
                    <Box 
                        pad='medium'
                        gap='small'
                        width='medium'
                        alignSelf='center'
                    >
                        <Auth
                            supabaseClient={supabaseClient}
                            appearance={{ theme: ThemeSupa }}
                            view={authMode}
                        />
                    </Box>
        </Box>
    </Box>
  )
}

export default Registration








