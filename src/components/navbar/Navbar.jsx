import './navbar.css'
import HeaderLogo from '../../asset/img/header-logo.png'
import BNB from '../../asset/img/BNB.png'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img className="logo" src={HeaderLogo} alt="" />
        <ul>
          <li>
            <a href="#pool">Pool</a>
          </li>
          <li>
            <a href="#audit">Audit</a>
          </li>
          <li>
            <a href="#pdf">PDF</a>
          </li>
        </ul>

        <div className="bnb-image">
          <img src={BNB} alt="" />
          <span>$000.00</span>
          <div className="wallet">
            <button>Connect Wallet</button>
          </div>
        </div>
        <IoIosMenu className="icon" />
      </div>
    </nav>
  )
}

export default Navbar
