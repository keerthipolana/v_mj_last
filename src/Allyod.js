import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Allyod(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>

        <img src="llyodlogo.jpeg" alt="llyod logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="ll1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>33,000</Card.Title>
            <Card.Text>
            Lloyd 1.5 Ton 3 Star Split Inverter AC - White  (GLS18I3FWAEV, Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="ll2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>39,000</Card.Title>
            <Card.Text>
            Lloyd 1.5 Ton 5 Star Split Inverter AC - White  (GLS18I5FWBEV, Copper Condenser)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutlloyd" > ABOUT LLOYD</Link>
  </div>
        </>
    )
}
export default Allyod