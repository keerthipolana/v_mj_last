import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Hsharp(){
    return(
        <>
<img src="sharp.jpeg" alt="sharp  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="hsharp.jpg" className='img' />
          <Card.Body>
            <Card.Title>3,700</Card.Title>
            <Card.Text>
            Sharp HT-CN300S Home Theater System (Silver)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="hsharp2.jpg" className='img' />
          <Card.Body>
            <Card.Title>5,000</Card.Title>
            <Card.Text>
            Sharp GX-BT180(BK) Stereo 2 x 7 Watt Wireless Bluetooth Speaker with Alexa (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          
  <div className='link'>
  <Link to="/Aboutsharp" > ABOUT SHARP</Link>
  </div>
        </>
    )
}
export default Hsharp