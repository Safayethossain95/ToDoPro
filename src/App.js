import logo from './logo.svg';
import './sass/sassFiles/main.scss'
import { useDispatch,useSelector } from 'react-redux';

import Homepage from './pages/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/sassFiles/main.scss'
function App() {
  return (
    <div className="App">
       <Homepage/>
    </div>
  );
}

export default App;
