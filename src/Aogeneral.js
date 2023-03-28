import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Aogeneral(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="ogenerallogo.jpeg" alt="ogeneral logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="og1.webp" className='img og1' />
          <Card.Body>
            <Card.Title>60,000</Card.Title>
            <Card.Text>
            O-General 1.5 Ton 5 Star EFFICIENT & TROPICAL INVERTER Split Air Conditioner - White (ASGG18CGTB-B, Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="og2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>49,000</Card.Title>
            <Card.Text>
            O-General 1 Ton 5 Star EFFICIENT & TROPICAL Inverter Split AC (Copper Condenser, ASGG12CGTB-B, White)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="og3.webp" className='img mit' />
          <Card.Body>
            <Card.Title>40,000</Card.Title>
            <Card.Text>
            O general 1 Ton 3 Star Inverter Split AC (ASGG12CPTB-B, R32, Copper, White)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="og4.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>51,000</Card.Title>
            <Card.Text>
            O-General 1.5 Ton 3 Star Inverter Split Air Conditioner (CPTA Technology) - White (ASGG18CPTB-B, Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="og5.webp" className='img mit ' />
          <Card.Body>
            <Card.Title>64,000</Card.Title>
            <Card.Text>
          
            Solo, O General Split AC (1.5 Ton, 5 Star - Inverter) - ASGG18CGTA
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="og6.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>53,000</Card.Title>
            <Card.Text>
            Ogeneral ASGA18BMWA 1.5 Ton 3 Star Fixed Speed Split Air Conditioner ASGA18BMWA (White)
  
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          
  <div className='link'>
  <Link to="/Aboutogeneral" > ABOUT OGENERAL</Link>
  </div>
          
        </>
    )
}
export default Aogeneral