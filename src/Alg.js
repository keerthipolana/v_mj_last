import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Alg(){
    return(
        <>
        <img src="lg.jpeg" alt="lg logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="alg1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>43,000</Card.Title>
            <Card.Text>
            LG 1.5 Ton 4 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter with Anti-Virus Protection, 2023 Model, RS-Q19ENYE1, White)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="alg2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>46,000</Card.Title>
            <Card.Text>
            LG 1.5 Ton 5 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, HD Filter with Anti-Virus Protection, 2023 Model, RS-Q19YNZE, White)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutlg" > ABOUT LG</Link>
  </div>
        </>
    )
}
export default Alg