import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Tsamsung(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="samlogo.jpeg" alt="samsung logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="tsam1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>14,000</Card.Title>
            <Card.Text>
            Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="tsam2.jpg" className='img mit' />
          <Card.Body>
            <Card.Title>30,000</Card.Title>
            <Card.Text>
            Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="tsam3.webp" className='img mit' />
          <Card.Body>
            <Card.Title>14,000</Card.Title>
            <Card.Text>
            Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)


            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="tsam4.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>32,000</Card.Title>
            <Card.Text>
            Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>

          <div className='link'>
  <Link to="/Aboutsamsung ">ABOUT SAMSUNG</Link>
  </div>
        </>
    )
}
export default Tsamsung