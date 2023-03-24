import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Amitsubishi(){
    return(
        <>
       




        

      <img src="mitsubishi.jpeg" alt="haier logo" width="200px" /><br/>
      
      


    <CardGroup>
      <Card className='card rspace'>
        <Card.Img variant="top" src="mit1.jpg" className='img mit' />
        <Card.Body>
          <Card.Title>44,000</Card.Title>
          <Card.Text>
          Mitsubishi Heavy Industries 1.6 Ton 3 Star Non Inverter Split AC (SRK20CSS-S6, White)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left rspace'>
        <Card.Img variant="top" src="mit2.jpg" className='img mit' />
        <Card.Body>
          <Card.Title>52,000</Card.Title>
          <Card.Text>
          Mitsubishi SRK24CW-S6 TON : 1.95 Heavy Split Fix Speed Copper 3 Star AC
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="mit3.webp" className='img mit' />
        <Card.Body>
          <Card.Title>39,000</Card.Title>
          <Card.Text>
          Mitsubishi SRK18CS-S6 1.5 Ton 1 Star Split Air Conditioner
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="mit4.webp" className='img  mit' />
        <Card.Body>
          <Card.Title>38,000</Card.Title>
          <Card.Text>
          Mitsubishi SRK10CRS-S6 0.8 Ton 5 Star Split Air Conditioner
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="mit5.webp" className='img mit ' />
        <Card.Body>
          <Card.Title>46,000</Card.Title>
          <Card.Text>
        
          Mitsubishi SRK13CRS-S6 1.1 Ton 3 Star Split Air Conditioner
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="mit6.webp" className='img  mit' />
        <Card.Body>
          <Card.Title>57,000</Card.Title>
          <Card.Text>
          Mitsubishi SRK 18 YL-S 1.5 Ton Inverter Split Air Conditioner

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        
<div className='link'>
<Link to="/Aboutmitsubishi" > ABOUT MITSUBISHI</Link>
</div>
        


     

        </>
    )
}

export default Amitsubishi
      