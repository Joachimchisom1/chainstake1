import './invests.css'
import './form.css'
import './affiliate.css'
import './dropdown.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { BiMessageAltDetail } from 'react-icons/bi'
import { useState } from 'react'

const Invests = () => {
  const { open, dropDown } = useState(false)
  const dropdown = () => dropDown(true)
  const dropdownClose = () => dropDown(false)
  return (
    <div className="invests">
      <div className="invest-1">
        <div className="stake__title">
          <h4>Stake BNB</h4>
          <p>
            Minimal stake amount <span>0.01 BNB</span>
          </p>
        </div>
        <Table className="table">
          <thead className="white_text bc">
            <tr>
              <th className="th">Days</th>
              <th>$Daily</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="white_text">
            <tr>
              <td>14</td>
              <td>8</td>
              <td>112</td>
              <th>
                <div className="ArrowDown__icon">
                  <IoIosArrowDown />
                </div>
              </th>
            </tr>
            <div className="dropdown dropdown1" open={open}>
              <h4 className="h4">Total Earn : 0.00000 BNB</h4>
              <div className="btns">
                <input type="text" placeholder="Enter BNB amount" />
                <button>Unlock Wallet</button>
              </div>
            </div>
            <tr>
              <td>28</td>
              <td>8</td>
              <td>224</td>
              <th>
                <div className="ArrowDown__icon">
                  <IoIosArrowDown />
                </div>
              </th>
            </tr>
            <div className="dropdown dropdown1">
              <h4 className="h4">Total Earn : 0.00000 BNB</h4>
              <div className="btns">
                <input type="text" placeholder="Enter BNB amount" />
                <button>Unlock Wallet</button>
              </div>
            </div>
          </tbody>
        </Table>
      </div>
      <div className="invest-2">
        <h4>My Farm</h4>
        <div className="amm amm1">
          <div>
            <h5 className="font-size">BNB in wallet</h5>
            <p>0.00000</p>
            <p>$0.00000</p>
          </div>
          <button className="button">BUY BNB.</button>
        </div>
        <div className="amm amm2">
          <div>
            <h5 className="font-size">Total Deposits</h5>
            <p className="to-top">0.00000</p>
            <p>$0.00000</p>
          </div>
          <div className="total_arvested">
            <h5 className="font-size">Total Harvested</h5>
            <p className="to-top">0.00000</p>
            <p>$0.00000</p>
          </div>
        </div>
        <div className="amm amm3">
          <div>
            <h5 className="font-size">Total Deposits</h5>
            <p>0.00000</p>
            <p>$0.00000</p>
          </div>
          <button>CONNECT WALLET</button>
        </div>
      </div>
      <div className="invest-3">
        <h4>Affiliate Program</h4>
        <div className="total_earning">
          <h5>Total Earnings:</h5>
          <p>0.00000</p>
        </div>
        <div className="total_earning">
          <h5>1 LVL - 7%</h5>
          <p>0</p>
        </div>
        <div className="total_earning">
          <h5>2 LVL - 2%</h5>
          <p>0</p>
        </div>
        <div className="total_earning">
          <h5>3 LVL - 1%</h5>
          <p>0</p>
        </div>
        <div className="link">
          <span>Your Personal Link</span>
          <input type="text" placeholder="Connect Your Wallet" />
          <button>
            <HiOutlineClipboardCopy />
            COPY LINK
          </button>
        </div>
        <div className="info">
          <BiMessageAltDetail />
          <span>
            You must have at least 1 stake to activate the affiliate program
          </span>
        </div>
      </div>
      <div className="invest-4">
        <h4>Read before use</h4>
        <p>
          The principal deposit cannot be withdrawn, the only return users can
          get are daily dividends and referral rewards. Payments is possible
          only if contract balance have enough BNB. Please analyze the
          transaction history and balance of the smart contract before
          investing. High risk - high profit, DYOR
        </p>
      </div>
    </div>
  )
}

export default Invests
