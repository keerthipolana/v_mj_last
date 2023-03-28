 import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Hfd(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
<img src="hfdlogo.jpeg" alt="f&d  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="hfd1.webp" className='img' />
          <Card.Body>
            <Card.Title>2,700</Card.Title>
            <Card.Text>
            F&D A110 70 W 2.1 Channel Wired Multimedia Speakers with Subwoofer Satellite Speaker
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="hfd2.webp" className='img' />
          <Card.Body>
            <Card.Title>5,200</Card.Title>
            <Card.Text>
            F&D A521X 104 W 2.1 Channel Bluetooth Multimedia Speakers with Subwoofer Satellite Speaker, Remote, Digital FM & USB (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hfd3.webp" className='img' />
          <Card.Body>
            <Card.Title>4,000</Card.Title>
            <Card.Text>
            F&D A180X 84 W 2.1 Channel Bluetooth Multimedia Speaker with Subwoofer Satellite Speaker, Digital LED Display, Remote, Digital FM & USB, Black
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hfd4.webp" className='img am4' />
          <Card.Body>
            <Card.Title>5,500</Card.Title>
            <Card.Text>
            F&D F550X 112 W 2.1 Channel Bluetooth Multimedia Speakers with Subwoofer Satellite Speaker, Multicolor LED Display, Remote, USB, SD Card, NFC
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hfd5.webp" className='img ' />
          <Card.Body>
            <Card.Title>4,000</Card.Title>
            <Card.Text>
          
            F&D A140X 74 W 2.1 Channel Bluetooth Multimedia Speakers with Subwoofer Satellite Speaker, Remote, Digital FM & USB (Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hfd6.webp" className='img ' />
          <Card.Body>
            <Card.Title>7,500</Card.Title>
            <Card.Text>
          
            FF&D F3800X 160 W 5.1 Channel Bluetooth Home Audio Speaker & Home Theater System
            </Card.Text>
          </Card.Body>
          </Card>
        
          </CardGroup>
  <div className='link'>
  <Link to="/Abouthfd" > ABOUT F&D</Link>
  </div>
        </>
    )
}
export default Hfd