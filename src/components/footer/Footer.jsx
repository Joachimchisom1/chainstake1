import './footer.css'
import LINK1 from '../../asset/img/download.png'
import LINK2 from '../../asset/img/download1.png'
import LINK3 from '../../asset/img/1.png'
import LINK4 from '../../asset/img/telegram.png'
import LINK5 from '../../asset/img/twitter.svg'

const Footer = () => {
  return (
    <div className='footer'>
        MultiStake 2022 Ⓒ All Rights Reserved
        <div className="links">
          <img className='img' src={LINK1} alt="" />
          <img className='img'  src={LINK2} alt="" />
          <img className='img'  src={LINK3} alt="" />
          <img className='img'  src={LINK4} alt="" />
          <img className='img'  src={LINK5} alt="" />
        </div>
    </div>
  )
}

export default Footer