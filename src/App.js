import logo from './logo.svg';
import './App.css';
import RootRouter from './router';
import { useSelector } from "react-redux";
import { DefaultRootState } from 'react-redux';

function App() {
  return (
    <>
      <RootRouter/>
    </>
  );
}

export default App;