import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Eastman(){
    return(
        <>
        <img src="eastman.jpeg" alt="eastman  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="em1.webp" className='img' />
          <Card.Body>
            <Card.Title>24,500</Card.Title>
            <Card.Text>
            Eastman Tubular Conventional Battery, Recyclable Tall Tubular Inverter Battery for Home, Office & Shops (Blue, 200 AH)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="em2.webp" className='img' />
          <Card.Body>
            <Card.Title>16,000</Card.Title>
            <Card.Text>
            Eastman Tubular Conventional Battery, Recyclable Tall Tubular Inverter Battery for Home, Office & Shops. 180 AH, Multicolour
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="em3.webp" className='img' />
          <Card.Body>
            <Card.Title>27,000</Card.Title>
            <Card.Text>
            Eastman Recyclable Tall Tubular Conventional Inverter Battery (Blue, 160 AH)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="em4.webp" className='img am4' />
          <Card.Body>
            <Card.Title>19,000</Card.Title>
            <Card.Text>
            Shri mahakal traders | E-Rickshaw Battery | E-Rickshaw Tubular Batteries 12 V, Rickshaw battery chargers (EM12012ER)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="em5.webp" className='img ' />
          <Card.Body>
            <Card.Title>25,000</Card.Title>
            <Card.Text>
          
            E-Rickshaw Battery | E-Rickshaw Tubular Batteries (EM150ER)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="em6.webp" className='img ' />
          <Card.Body>
            <Card.Title>29,500</Card.Title>
            <Card.Text>
          
            Shri mahakal traders | E-Rickshaw Battery | E-Rickshaw Tubular Batteries 12 V, Environmental friendly aqua trap vent plugs specially (EM1209ER)
            </Card.Text>
          </Card.Body>
          </Card>
        
          </CardGroup>
  <div className='link'>
  <Link to="/Abouteastman" > ABOUT EASTMAN</Link>
  </div>
        </>
    )
}
export default Eastman