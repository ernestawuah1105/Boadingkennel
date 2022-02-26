import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './component/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
        <Navbar bg="dark" variant="dark" expanded="true" expand="lg" fixed="top">
            <Navbar.Brand href="/">Boarding Kennel</Navbar.Brand>
          </Navbar>
           <div className="componenet">
             <Routes>
             
            <Route path="/"  element={<Home />}/>
            </Routes>
            
          </div>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
