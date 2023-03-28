import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Wbosh(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
         <img src="bosh.jpeg" alt="voltas logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="bosh1.webp" className='img wv' />
          <Card.Body>
            <Card.Title>32,000</Card.Title>
            <Card.Text>
            Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic Front Loading Washing Machine with In - built Heater (WAJ2416SIN, Silver)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="bosh2.webp" className='img wv' />
          <Card.Body>
            <Card.Title>19,000</Card.Title>
            <Card.Text>
            Bosch 6.5 Kg 5 Star Fully Automatic Top Load Washing Machine WOE651D0IN (Dark Grey)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutbosh" > ABOUT BOSH</Link>
  </div>
        </>
    )
}
export default Wbosh