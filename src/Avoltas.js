import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Avoltas(){
    return(
        <>
         <img src="av1.jpeg" alt="voltas logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="av2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>33,000</Card.Title>
            <Card.Text>
            Voltas 1.5 Ton 3 Star Split Inverter AC - White  (183V Vectra Pride(4503445), Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="av3.webp" className='img mit' />
          <Card.Body>
            <Card.Title>40,000</Card.Title>
            <Card.Text>
            Voltas 1.5 Ton 5 Star Split Inverter AC - White  (185V Vectra Elite(4503453), Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutvoltas" > ABOUT VOLTAS</Link>
  </div>
        </>
    )
}
export default Avoltas