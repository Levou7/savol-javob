import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
