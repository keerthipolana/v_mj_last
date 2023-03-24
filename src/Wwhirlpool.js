import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Wwhirlpool(){
    return(
        <>
        <img src="whirlpoollogo.jpeg" alt="whirlpool logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="ww1.webp" className='img ' />
          <Card.Body>
            <Card.Title>22,000</Card.Title>
            <Card.Text>
            Whirlpool 7.5 Kg 5 Star Fully-Automatic Top Loading Washing Machine with In-Built Heater (360 BLOOMWASH PRO (540) H 7.5, Graphite, Hexa Bloom Impeller)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="ww2.webp" className='img ' />
          <Card.Body>
            <Card.Title>18,000</Card.Title>
            <Card.Text>
            Whirlpool 7.5 Kg 5 Star Royal Plus Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL PLUS 7.5, Grey, Hard Water Wash)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutwhirlpool" > ABOUT WHIRLPOOL</Link>
  </div>
        </>
    )
}
export default Wwhirlpool