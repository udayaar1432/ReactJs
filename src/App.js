
import './App.css';
import Result from './main';
import Header from './header';
import Output from './newsletter/main';
// import Login from './main';
// import Header from "./images"

const App = () => (
  <div>
    <div className='appbody' >
      <Header />
      <Result />
    </div>

    <div className='newsbody'>
      <Output />
    </div>
  </div>
)
export default App;

