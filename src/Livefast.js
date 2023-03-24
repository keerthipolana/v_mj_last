import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Livefast(){
    return(
        <>
<img src="livefast.jpeg" alt="luminous logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="lf1.webp" className='img' />
          <Card.Body>
            <Card.Title>24,500</Card.Title>
            <Card.Text>
            Livfast Tall Tubular Inverter/UPS Battery, 200AH/12V
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="lf2.jpg" className='img' />
          <Card.Body>
            <Card.Title>16,000</Card.Title>
            <Card.Text>
            Livfast Inverter & Battery Combo for Home, Office & Shops ( Livfast FC725 Square Wave Inverter UPS Home � Black & MXSTJ 1936 160AH, Recyclable Jumbo Tubular Inverter Battery (Orange & Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="lf3.webp" className='img' />
          <Card.Body>
            <Card.Title>27,000</Card.Title>
            <Card.Text>
            Livfast Inverter Combo FCS1125 Sine Wave Inverter and MXTT2342 Tall Tubular 200 AH Battery
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="lf4.jpg" className='img am4' />
          <Card.Body>
            <Card.Title>19,000</Card.Title>
            <Card.Text>
            Livfast Maxximo MXTT 1845 Inverter Battery Short Tubler 150AH 12V 45 Months Warranty,Black
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="lf5.webp" className='img ' />
          <Card.Body>
            <Card.Title>25,000</Card.Title>
            <Card.Text>
          
            Livfast Maxximo Battery Tall Tubular Battery Model MXTT 1845 150 Ah
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="lf6.webp" className='img ' />
          <Card.Body>
            <Card.Title>29,500</Card.Title>
            <Card.Text>
          
            Livfast 150 AH/12V Flat Plate Inverter/UPS Battery
            </Card.Text>
          </Card.Body>
          </Card>
        
          </CardGroup>
  <div className='link'>
  <Link to="/Aboutlivefast" > ABOUT LIVEFAST</Link>
  </div>
        </>
    )
}
export default Livefast