import './home.css'
import BNB from '../../asset/img/BNB.png'
import BUSD from '../../asset/img/BUSD.png'
import USDT from '../../asset/img/USDT.png'
import ADA from '../../asset/img/ADA.png'
import BTC from '../../asset/img/BTC.png'
import ETH from '../../asset/img/ETH.png'
import XRP from '../../asset/img/XRP.png'
import SHIB from '../../asset/img/SHIB.png'
import SLP from '../../asset/img/SLP.png'
import AXS from '../../asset/img/AXS.png'

const Home = () => {
  return (
    <div className="container">
      <h3>
        Meet The <span className="white_text">Multistake</span>
      </h3>
      <h3>Yield Farming</h3>
      <h3 className="h3">Staking BNB is Active</h3>
      <button className="btn">Check Smart Contract</button>
      <div className="btc__image">
        <button>
          <img src={BNB} alt="" />
          <span>BNB</span>
        </button>
        <button>
          <img src={BUSD} alt="" />
          <span>BUSD</span>
        </button>
        <button>
          <img src={USDT} alt="" />
          <span>USDT</span>
        </button>
        <button>
          <img src={ADA} alt="" />
          <span>ADA</span>
        </button>
        <button>
          <img src={BTC} alt="" />
          <span>BTC</span>
        </button>
        <button>
          <img src={ETH} alt="" />
          <span>ETH</span>
        </button>
        <button>
          <img src={XRP} alt="" />
          <span>XRP</span>
        </button>
        <button>
          <img src={SHIB} alt="" />
          <span>SHIB</span>
        </button>
        <button>
          <img src={SLP} alt="" />
          <span>SLP</span>
        </button>
        <button>
          <img src={AXS} alt="" />
          <span>AXS</span>
        </button>
      </div>
    </div>
  )
}

export default Home
