import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style.css'
import About from './About';
import Service from './Service'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Rlg from './Rlg'
import Aboutlg from './Aboutlg'
import Rsamsung from './Rsamsung'
import Aboutsamsung from './Aboutsamsung'
import Rhaier from './Rhaier'
import Abouthaier from './Abouthaier'
import Wlg from './Wlg'
import Amitsubishi from './Amitsubishi'
import Aboutmitsubishi from './Aboutmitsubishi'
import Amaron from './Amaron'
import Aboutamaron from './Aboutamaron'
import Luminous from './Luminous'
import Aboutluminous from './Aboutluminous'
import Livefast from './Livefast'
import Aboutlivefast from './Aboutlivefast'
import Eastman from './Eastman'
import Abouteastman from './Abouteastman';
import Hsony from './Hsony';
import Aboutsony from './Aboutsony';
import Hfd from './Hfd';
import Abouthfd from './Abouthfd';
import Hiball from './Hiball';
import Aboutiball from './Aboutiball';
import Hsharp from './Hsharp';
import Aboutsharp from './Aboutsharp';
import Hphilips from './Hphilips';
import Aboutphilips from './Aboutphilips';
import Tsony from './Tsony'
import Tlg from './Tlg'
import Tsamsung from './Tsamsung';
import Thaier from './Thaier';
import Ttcl from './Ttcl';
import Abouttcl from './Abouttcl';
import Tvideocon from './Tvideocon';
import Aogeneral from './Aogeneral';
import Aboutogeneral from './Aboutogeneral';
import Alg from './Alg'
import Allyod from './Allyod';
import Aboutlloyd from './Aboutlloyd';
import Avoltas from './Avoltas';
import Aboutvoltas from './Aboutvoltas';
import Rvoltas from './Rvoltas';
import Rbpl from './Rbpl'
import Aboutbpl from './Aboutbpl';
import Rwhirlpool from './Rwhirlpool';
import Aboutwhirlpool from './Aboutwhirlpool';
import Wsamsung from './Wsamsung'
import Wwhirlpool from './Wwhirlpool'
import Wvoltas from './Wvoltas'
import Wifb from './Wifb'
import Aboutifb from './Aboutifb'
import Wbosh from './Wbosh'
import Aboutbosh from './Aboutbosh'


function App(){
 
    return(
        <>
        
        
        <BrowserRouter>
{/* NAV BAR */}
<div>
    <Navbar bg="light" expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#"><b>Natraj Electronics</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/" className="navb nava">Home</Link>
            <Link to="/About" className='navb nava'>About</Link>
            <Link to="/Service" className='navb nava'>Service</Link>
            <Link to="/Products" className="navb nava">Products</Link>
            <Link to="/Contact" className="navb nava">Contact</Link>
            
            
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

    
  
{/* BOOTSTRAP GRID SYSTEM */}

<div class="row" className='row'>
<div class="col-6 col-md-4" className='col1' >
<h3 className='hd'><u>PRODUCTS</u></h3>
    <ul className='refri li'>
       <b>Refrigerators</b> 
        <li><a href="/Rlg" className='li'>LG</a></li>
        <li><a href="/Rsamsung" className='li'>SAMSUNG</a></li>
        <li><a href="/Rhaier" className='li'>HAIER</a></li>
        <li><a href="/Rvoltas" className='li'>VOLTAS</a></li>
        <li><a href="/Rbpl" className='li'>BPL</a></li>
        <li><a href="/Rwhirlpool" className='li'>WHIRLPOOL</a></li>

    </ul>
    <ul>
        <b>Washing Machines</b>
        <li><a href="/Wlg" className='li'>LG</a></li>
        <li><a href="/Wsamsung" className='li'>SAMSUNG</a></li>
        <li><a href="/Wwhirlpool" className='li'>WHIRLPOOL</a></li>
        <li><a href="/Wvoltas" className='li'>VOLTAS</a></li>
        <li><a href="/Wifb" className='li'>IFB</a></li>
        <li><a href="/Wbosh" className='li'>BOSH</a></li>

    </ul>
    <ul>
        <b>AC</b>
        <li><a href="/Amitsubishi" className='li'>MITSUBISHI</a></li>
        <li><a href="/Aogeneral" className='li'>OGENERAL</a></li>
        <li><a href="/Alg" className='li'>LG</a></li>
        <li><a href="/Allyod" className='li'>LLOYD</a></li>
        <li><a href="/Avoltas" className='li'>VOLTAS</a></li>
       

    </ul>
    <ul>
        <b>TV</b>
        <li><a href="/Tsony" className='li'>SONY</a></li>
        <li><a href="/Tlg" className='li'>LG</a></li>
        <li><a href="/Tsamsung" className='li'>SAMSUNG</a></li>
        <li><a href="/Thaier" className='li'>HAIER</a></li>
        <li><a href="/Ttcl" className='li'>TCL</a></li>
        <li><a href="/Tvideocon" className='li'>VIDEOCON</a></li>

    </ul>
    <ul>
        <b>HOME THEATRE</b>
        <li><a href="/Hsony" className='li'>SONY</a></li>
        <li><a href="/Hfd" className='li'>F&D</a></li>
        <li><a href="/Hiball" className='li'>IBALL</a></li>
        <li><a href="/Hsharp" className='li'>SHARP</a></li>
        <li><a href="/Hphilips" className='li'>PHILIPS</a></li>
        

    </ul>
    <ul>
        <b>BATTERIES</b>
        <li><a href="/Amaron" className='li'>AMARON</a></li>
        <li><a href="/Luminous" className='li'>LUMINOUS</a></li>
        <li><a href="/Livefast" className='li'>LIVEFAST</a></li>
        <li><a href="/Eastman" className='li'>EASTMAN</a></li>


    </ul>
    </div>
    
  <div class="col-12 col-md-8 " >
  
    
    <Routes>
        
    <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Rlg' element={<Rlg/>}/>
        <Route path='/Rsamsung' element={<Rsamsung/>}/>
        <Route path='/Aboutlg' element={<Aboutlg/>}/>
        <Route path='/Aboutsamsung' element={<Aboutsamsung/>}/>
        <Route path='/Rhaier' element={<Rhaier/>}/>
        <Route path='/Abouthaier' element={<Abouthaier/>}/>
        <Route path='/Wlg' element={<Wlg/>}/>
        <Route path='/Amitsubishi' element={<Amitsubishi/>}/>
        <Route path='/Aboutmitsubishi' element={<Aboutmitsubishi/>}/>
        <Route path='/Amaron' element={<Amaron/>}/>
        <Route path='/Aboutamaron' element={<Aboutamaron/>}/>
        <Route path='/Luminous' element={<Luminous/>}/>
        <Route path='/Aboutluminous' element={<Aboutluminous/>}/>
        <Route path='/Livefast' element={<Livefast/>}/>
        <Route path='/Aboutlivefast' element={<Aboutlivefast/>}/>
        <Route path='/Eastman' element={<Eastman/>}/>
        <Route path='/Abouteastman' element={<Abouteastman/>}/>
        <Route path='/Hsony' element={<Hsony/>}/>
        <Route path='/Aboutsony' element={<Aboutsony/>}/>
        <Route path='/Hfd' element={<Hfd/>}/>
        <Route path='/Abouthfd' element={<Abouthfd/>}/>
        <Route path='/Hiball' element={<Hiball/>}/>
        <Route path='/Aboutiball' element={<Aboutiball/>}/>
        <Route path='/Hsharp' element={<Hsharp/>}/>
        <Route path='/Aboutsharp' element={<Aboutsharp/>}/>
        <Route path='/Hphilips' element={<Hphilips/>}/>
        <Route path='/Aboutphilips' element={<Aboutphilips/>}/>
        <Route path='/Tsony' element={<Tsony/>}/>
        <Route path='/Tlg' element={<Tlg/>}/>
        <Route path='/Tsamsung' element={<Tsamsung/>}/>
        <Route path='/Thaier' element={<Thaier/>}/>
        <Route path='/Ttcl' element={<Ttcl/>}/>
        <Route path='/Abouttcl' element={<Abouttcl/>}/>
        <Route path='/Tvideocon' element={<Tvideocon/>}/>
        <Route path='/Aogeneral' element={<Aogeneral/>}/>
        <Route path='/Aboutogeneral' element={<Aboutogeneral/>}/>
        <Route path='/Alg' element={<Alg/>}/>
        <Route path='/Allyod' element={<Allyod/>}/>
        <Route path='/Aboutlloyd' element={<Aboutlloyd/>}/>
        <Route path='/Avoltas' element={<Avoltas/>}/>
        <Route path='/Aboutvoltas' element={<Aboutvoltas/>}/>
        <Route path='/Rvoltas' element={<Rvoltas/>}/>
        <Route path='/Rbpl' element={<Rbpl/>}/>
        <Route path='/Aboutbpl' element={<Aboutbpl/>}/>
        <Route path='/Rwhirlpool' element={<Rwhirlpool/>}/>
        <Route path='/Aboutwhirlpool' element={<Aboutwhirlpool/>}/>
        <Route path='/Wsamsung' element={<Wsamsung/>}/>
        <Route path='/Wwhirlpool' element={<Wwhirlpool/>}/>
        <Route path='/Wvoltas' element={<Wvoltas/>}/>
        <Route path='/Wifb' element={<Wifb/>}/>
        <Route path='/Aboutifb' element={<Aboutifb/>}/>
        <Route path='/Wbosh' element={<Wbosh/>}/>
        <Route path='/Aboutbosh' element={<Aboutbosh/>}/>

    </Routes>
   
  </div>
  
  
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50982.72143599005!2d81.47150263144364!3d16.539026909257743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a362d11555557f3%3A0x1a0758db70000000!2sNatraj%20Electronics%20Shoppe!5e0!3m2!1sen!2sin!4v1680023996687!5m2!1sen!2sin" width="600" height="450" className='map' allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
{/* FOOTER */}


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <h4><span>Get connected with us on social networks:</span></h4>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Natraj Electronics Shoppe
              </h6>
              <p>
              OPP CHAMBER OF COMMERS, 17-2-26, REST HOUSE ROAD,Bhimavaram, West Godavari, Andhra Pradesh, 534201 India
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Refrigerator
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Washing Machine
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                AC
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
               TV
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/About' className='text-reset'>
                 About
                </a>
              </p>
              <p>
                <a href='/Service' className='text-reset'>
                 Service
                </a>
              </p>
              <p>
                <a href='/Products' className='text-reset'>
                 Products
                </a>
              </p>
              <p>
                <a href='/Contact' className='text-reset'>
                Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Rest House Road,Bhimavaram
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                maheshbabu@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 91 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='NatrajElectronics.com/'>
        NatrajElectronics.com
        </a>
      </div>
    </MDBFooter>

    
    </BrowserRouter>
        </>
    )
}
export default App;