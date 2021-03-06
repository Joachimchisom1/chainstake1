import './navbar.css'
import HeaderLogo from '../../asset/img/header-logo.png'
import BNB from '../../asset/img/BNB.png'
import { IoIosMenu } from 'react-icons/io'
// import Web3 from "web3";
// import Web3Modal from "web3modal";
import { useEthers } from '@usedapp/core'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

const Navbar = () => {
  const { account, activateBrowserWallet } = useEthers()
  // figure out if we are connected or not
  // if not connect, shows a 'connect wallet' button
  // otherwise, just show the address or something
  const isConnected = account !== undefined
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
            {/* <button onClick={() => modalOpen()}>Connected</button> */}
            {isConnected ?
              <button onClick={() => activateBrowserWallet()}>Connected</button>
              :
              <button onClick={() => activateBrowserWallet()}>Connect Wallet</button>
            }
          </div>
        </div>
        <IoIosMenu className="icon" />
      </div>
    </nav>
  )
}

export default Navbar
