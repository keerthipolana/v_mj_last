import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Thaier(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
<img src="haierlogo.jpeg" alt="lg logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="th1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>27,000</Card.Title>
            <Card.Text>
            Haier LED 43 Inch Bezel Less Google Android Smart AI Plus Television (LE43K7200GA_Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="th2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>17,000</Card.Title>
            <Card.Text>
            Haier 80 cm (32 inches) HD Ready LED Smart TV LE32K6500AG (Gold) (2018 Model)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Abouthaier" > ABOUT HAIER</Link>
  </div>
        </>
    )
}
export default Thaier