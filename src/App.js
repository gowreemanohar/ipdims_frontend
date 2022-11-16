// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Guidelines from './pages/Guidelines';
import Registration from './pages/Registration';
import Submission from './pages/Submission';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        
        {/* Routes Handling */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/guidelines' element={<Guidelines/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/submission' element={<Submission/>} />
          <Route path='/guidelines' element={<Guidelines/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
