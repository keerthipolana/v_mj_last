import React from "react";
import Container from 'react-bootstrap/Container';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import About from './About';
import Service from './Service'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import './style.css'
function Navb(){
    return(
<>
<Router>
<div>
<Navbar bg="light" expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#"><b>Natraj Electronics</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link as={Link} to={"/Home"} className="navb nava">Home</Nav.Link>
            <Nav.Link as={Link} to={"/About"} className="navb">About</Nav.Link>
            <Nav.Link as={Link} to={"/Service"} className="navb">Service</Nav.Link>
            <Nav.Link as={Link} to={"/Products"} className="navb">Products</Nav.Link>
            <Nav.Link as={Link} to={"/Contact"} className="navb">Contact</Nav.Link>
            
            
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

<div>
    <Routes>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/Service" element={<Service/>}/>
        <Route  path="/Products" element={<Products/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
           
        {/* <Route path="/About">
            <About/>
        </Route>
        <Route path="/Service">
            <Service/>
        </Route>
        <Route path="/Products">
            <Products/>
        </Route>
        <Route path="/Contact">
            <Contact/>
        </Route> */}
    </Routes>
</div>
</Router>
        </>
    )
        
    
}
export default Navb