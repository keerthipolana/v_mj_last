import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Hiball(){
    return(
        <>
<img src="iballlogo.jpeg" alt="iball  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="iball1.webp" className='img' />
          <Card.Body>
            <Card.Title>3,700</Card.Title>
            <Card.Text>
            iBall Tarang Woods 40 Watt 2.1 Channel Wireless Bluetooth Multimedia Speaker (Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="iball2.webp" className='img' />
          <Card.Body>
            <Card.Title>700</Card.Title>
            <Card.Text>
            iBall Decor 9-2.0 USB Powered Computer Multimedia Speakers with in-line Volume Controller, Black
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          
  <div className='link'>
  <Link to="/Aboutiball" > ABOUT IBALL</Link>
  </div>
        </>
    )
}
export default Hiball