import { useAuth } from "../useAuth"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"

function Main() {
  const { sess } = useAuth()

  if (!sess) {
    return (
      <LoggedOut />
    )
  } else {
    return (
      <LoggedIn />
    )
  }
}

export default Main