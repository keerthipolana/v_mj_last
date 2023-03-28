import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Rwhirlpool(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="whirlpoollogo.jpeg" alt="whirlpool  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="rw1.webp" className='img' />
          <Card.Body>
            <Card.Title>26,000</Card.Title>
            <Card.Text>
            Whirlpool 240 L Frost Free Multi-Door Refrigerator(FP 263D Protton Roy, Alpha Steel)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="rw2.webp" className='img' />
          <Card.Body>
            <Card.Title>28,000</Card.Title>
            <Card.Text>
            
            Whirlpool 265 L 3 Star Inverter Frost-Free Double Door Refrigerator with Intellisense inverter technology(INTELLIFRESH INV CNV 278 3S, German Steel, Convertible, 2022 Model)

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
export default Rwhirlpool