import "./app.css"
import Navbar from "./components/navbar/Navbar";
import Home from './components/home/Home'
import Price from "./components/price/Price";
import Invests from "./components/Invest/Invests";
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Price/>
      <Invests/>
    </div>
  )
};

export default App;