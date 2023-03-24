import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

function Hphilips(){
    return(
        <>
        
<img src="philipslogo.jpeg" alt="philips  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="hp1.webp" className='img' />
          <Card.Body>
            <Card.Title>10,000</Card.Title>
            <Card.Text>
            Philips Audio TAV7587 5.1 Channel 100W Bluetooth Multimedia Speaker System with 5x15W Satellite Speakers, Multi-Connectivity Option with Supporting USB, AUX, FM & Remote Control (Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="hp2.jpg" className='img' />
          <Card.Body>
            <Card.Title>11,000</Card.Title>
            <Card.Text>
            
Philips Audio MMS2220B 2.1 Speaker 120W Bluetooth Convertible Multimedia Soundbar/Speaker (Black)
Roll over image to zoom in

            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          
  <div className='link'>
  <Link to="/Aboutphilips" > ABOUT PHILIPS</Link>
  </div>

        </>
    )
}
export default Hphilips