import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

import Footer from './Footer/Footer';
import Container from './Container/Container';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Header/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Container></Container>
        <Footer></Footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
