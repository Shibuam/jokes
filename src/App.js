import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './Screen/HomePage';
import Login from './Screen/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path ='/home' element={<HomePage/>}/>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
