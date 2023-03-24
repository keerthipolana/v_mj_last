import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Luminous(){
    return(
        <>
       

        




        

      <img src="luminouslogo.jpeg" alt="luminous logo" width="200px" /><br/>
      
      


    <CardGroup>
      <Card className='card rspace'>
        <Card.Img variant="top" src="lu1.webp" className='img' />
        <Card.Body>
          <Card.Title>24,500</Card.Title>
          <Card.Text>
          LUMINOUS Zelio 1100 Sine Wave Inverter with Red Charge RC25000 200Ah Battery and Trolley Zelio1100 with Rc2500 battery combo Pure Sine Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left rspace'>
        <Card.Img variant="top" src="lu2.webp" className='img' />
        <Card.Body>
          <Card.Title>16,000</Card.Title>
          <Card.Text>
          LUMINOUS Eco Watt Neo 700 with RC18000ST tc18000st Square Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="lu3.webp" className='img' />
        <Card.Body>
          <Card.Title>27,000</Card.Title>
          <Card.Text>
          LUMINOUS RC 25000 Tall Tubular Battery with iCon 1100 for Home & Office Pure Sine Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="lu4.webp" className='img am4' />
        <Card.Body>
          <Card.Title>19,000</Card.Title>
          <Card.Text>
          LUMINOUS Eco Watt Neo 1050 Inverter & TX100L Trolley With Red Charge RC18000 150Ah Tall RC18000 Square Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="lu5.webp" className='img ' />
        <Card.Body>
          <Card.Title>25,000</Card.Title>
          <Card.Text>
        
          LUMINOUS Eco Volt + 1550 with RC25000 200Ah Tubular battery Pure Sine Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="lu6.webp" className='img ' />
        <Card.Body>
          <Card.Title>29,500</Card.Title>
          <Card.Text>
        
          LUMINOUS Hercules 1500 Pure Sine Wave Inverter,RC 25000 200 Ah Tall Tubular Battery Combo Square Wave Inverter
          </Card.Text>
        </Card.Body>
        </Card>
      
        </CardGroup>
<div className='link'>
<Link to="/Aboutluminous" > ABOUT LUMINOUS</Link>
</div>
        


     

   
        </>
    )
}
export default Luminous