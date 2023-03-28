import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Tvideocon(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
         <img src="videocon.jpeg" alt="videocon logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="tv1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>8,000</Card.Title>
            <Card.Text>
            Videocon 24 Inch LED HD Ready TV (VRU24HH)

            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="tv2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>12,000</Card.Title>
            <Card.Text>
            Videocon 32 Inch LED HD Ready TV (VRV32HH)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
          <div className='link'>
  <Link to="/Aboutvideocon" > ABOUT VIDEOCON</Link>
  </div>
        </>
    )
}
export default Tvideocon