import "./Header.css"
import { MdToggleOff, MdToggleOn } from "react-icons/md"

export default function Header(props) {
  const { theme, setTheme } = props
  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <MdToggleOff /> : <MdToggleOn />}
        </span>
      </div>
    </header>
  )
}
