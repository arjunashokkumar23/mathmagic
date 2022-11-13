import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import Start from './components/start';
import Tutorial from './components/tutorial';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='home'>
          <div className='logo'>
            <Home></Home>
          </div>
          <div>
            <Start></Start>
          </div>
        </div>
        <div>
          <Routes>
            <Route path='/tutorial' element={<Tutorial/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
