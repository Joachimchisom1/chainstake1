import './app.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Price from './components/price/Price'
import Invests from './components/Invest/Invests'
import Footer from './components/footer/Footer'
import { DAppProvider, ChainId } from '@usedapp/core'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan]
    }}>
      <div>
        <Navbar />
        <Home />
        <Price />
        <Invests />
        <Footer />
      </div>
    </DAppProvider>
  )
}

export default App
