import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Ttcl(){
    return(
        <>
        
        <img src="tcllogo.jpeg" alt="lg logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="ttcl1.jpg" className='img mit' />
          <Card.Body>
            <Card.Title>18,000</Card.Title>
            <Card.Text>
            TCL 100 cm (40 inches) Full HD Certified Android Smart LED TV 40S6505 (Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="ttcl2.jpg" className='img mit' />
          <Card.Body>
            <Card.Title>23,000</Card.Title>
            <Card.Text>
            TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Abouttcl" > ABOUT TCL</Link>
  </div>
        </>
    )
}
export default Ttcl