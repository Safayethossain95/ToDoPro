import logo from './logo.svg';
import './sass/sassFiles/main.scss'
import { useDispatch,useSelector } from 'react-redux';

import Homepage from './pages/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/sassFiles/main.scss'
function App() {
  // const dispatch = useDispatch();
  // const noOfThings = useSelector(state => state.variable)
  // function handleClick() {
  //   dispatch(setVariable());
  // }
  return (
    <div className="App">
      {/* <h1>{noOfThings}</h1>
      <h2>hello</h2>
       <button onClick={handleClick}>Set Variable</button> */}
       <Homepage/>
    </div>
  );
}

export default App;
