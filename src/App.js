import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Emplisting from './components/Emplisting';
import Empcreate from './components/Empcreate';
import Empdetails from './components/Empdetails';
import Empedit from './components/Empedit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Emplisting />}></Route>
        <Route path='/employee/create' element={<Empcreate />}></Route>
        <Route path='/employee/details/:empid' element={<Empdetails />}></Route>
        <Route path='/employee/edit/:empid' element={<Empedit />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
