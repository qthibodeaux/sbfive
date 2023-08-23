import { useState } from 'react'
import { Box, Button } from 'grommet'
import { Auth } from '@supabase/auth-ui-react'
import supabaseClient from '../supaClient'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const setReturnpath = () => {
    localStorage.setItem("returnPath", window.location.pathname)
}

function Login() {
    const [showModal, setShowModal] = useState(false)
    const [authMode, setAuthMode] = useState("sign_in")

  return (
    <Box
        direction='column'
        justify='center'
        align='center'
        border
    >
        asdf
        <Box
            width='large'
        >
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
                        setShowModal(true)
                        setReturnpath()
                    }}
                />
                <Button
                    primary
                    label="Sign Up"
                    onClick={() => {
                        setAuthMode("sign_up")
                        setShowModal(true)
                        setReturnpath()
                    }}
                />
            </Box>
            {
                showModal && (
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
                )
            }
        </Box>
            
    </Box>
  )
}

export default Login