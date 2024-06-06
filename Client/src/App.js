import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Routes/Register';
import Login from './Routes/Login';
import Header from './Components/Header';
import Secret from './Routes/Secret';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/secret" element={<Secret />}></Route>
      </Routes>
    </div>
  );
}

export default App;
