import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './component/Home';
import CheckIn from './component/CheckIn';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
        <Navbar bg="dark" variant="dark" expanded="true" expand="lg" fixed="top">
            <Navbar.Brand href="/">Boarding Kennel</Navbar.Brand>
            <Nav>
               <Nav.Link href="checkin">Check In</Nav.Link>
            </Nav>
          </Navbar>
           <div className="componenet">
             <Routes>
             
            <Route path="/"  element={<Home />}/>
            <Route path="/checkin"  element={<CheckIn />}/>
            </Routes>
            
          </div>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
