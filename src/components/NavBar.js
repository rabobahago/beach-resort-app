import React from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  handleIsOpen = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-Header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleIsOpen}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links  show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default NavBar
