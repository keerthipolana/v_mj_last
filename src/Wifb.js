import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Wifb(){
    return(
        <>
         <img src="ifb.jpeg" alt="ifb logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="ifb1.webp" className='img ifb' />
          <Card.Body>
            <Card.Title>39,000</Card.Title>
            <Card.Text>
            IFB 8 Kg 5 Star Front Load Washing Machine 2X Power Steam (SENATOR WSS 8014, Silver, In-built Heater, 4 years Comprehensive Warranty)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="ifb2.webp" className='img ifb2' />
          <Card.Body>
            <Card.Title>19,000</Card.Title>
            <Card.Text>
            IFB 7.0 Kg 5 Star Top Load Washing Machine Aqua Conserve (TL-RES 7.0KG AQUA, Light Grey, Hard Water Wash, Smart Sense)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutifb" > ABOUT IFB</Link>
  </div>
        </>
    )
}
export default Wifb