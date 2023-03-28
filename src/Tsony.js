import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Tsony(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="sony.jpeg" alt="sony logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="ts1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>70,000</Card.Title>
            <Card.Text>
            Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="ts2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>25,000</Card.Title>
            <Card.Text>
            Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV KD-32W820K (Black) (2022 Model) | with Alexa Compatibility
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="ts3.webp" className='img mit' />
          <Card.Body>
            <Card.Title>63,000</Card.Title>
            <Card.Text>
            Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X75K (Black) (2022 Model) | with Alexa Compatibility
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="ts4.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>27,000</Card.Title>
            <Card.Text>
            Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV KD-32W830K (Black) (2022 Model) | with Alexa Compatibility
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="ts5.webp" className='img mit ' />
          <Card.Body>
            <Card.Title>47,000</Card.Title>
            <Card.Text>
          
            Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X75K (Black) (2022 Model) | with Alexa Compatibility
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="ts6.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>2,47,000</Card.Title>
            <Card.Text>
            Sony Bravia 189 cm (75 inches) XR Series 4K Ultra HD Smart Full Array LED Google TV XR-75X90K (Black)
  
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          
  <div className='link'>
  <Link to="/Aboutsony" > ABOUT SONY</Link>
  </div>
        </>
    )
}
export default Tsony