import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Search from './components/Search';
function App() {
  const authCtx=useContext(AuthContext);
  return (
    <div className="App">
      <NavBar />
      <Routes>
       {authCtx.isLoggedIn ? <Route path='/' element={<Search/>} /> : <Route path='/' element={<Login/>} />}
       
      </Routes>
    </div>
  );
}

export default App;
