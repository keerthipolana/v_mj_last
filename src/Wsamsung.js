import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Wsamsung(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="samlogo.jpeg" alt="lg logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace '>
          <Card.Img variant="top" src="wsam1.webp" className='img ws' />
          <Card.Body>
            <Card.Title>37,000</Card.Title>
            <Card.Text>
            Samsung 8 Kg 5 Star AI Control & Wi-Fi, Fully-Automatic Front Loading Washing Machine (WW80T504DAB1TL, Black Caviar, Digital Inverter)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="wsam2.webp" className='img ws' />
          <Card.Body>
            <Card.Title>38,000</Card.Title>
            <Card.Text>
            Samsung 8 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (WW80T4040CX1TL, Inox, In-Built Heater)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="wsam3.webp" className='img ws' />
          <Card.Body>
            <Card.Title>16,000</Card.Title>
            <Card.Text>
            Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver, Diamond drum)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="wsam4.webp" className='img ws ' />
          <Card.Body>
            <Card.Title>17,000</Card.Title>
            <Card.Text>
            Samsung 6.5 Kg 5 Star Inverter Fully-Automatic Top Loading Washing Machine (WA65T4262FS/TL , Silver, Wobble technology)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="wsam5.webp" className='img ws ' />
          <Card.Body>
            <Card.Title>30,000</Card.Title>
            <Card.Text>
          
            Samsung 10 Kg '5 star Ecobubble™ Wi-Fi Inverter Fully Automatic Top Load Washing Machine (WA10BG4686BRTL, Rose Brown), Bubble Storm & Super Speed technology
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="wsam6.webp" className='img ws6 ' />
          <Card.Body>
            <Card.Title>23,000</Card.Title>
            <Card.Text>
            Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          
  <div className='link'>
  <Link to="/Aboutsamsung" > ABOUT SAMSUNG</Link>
  </div>
        </>
    )
}
export default Wsamsung