import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Wvoltas(){
    return(
        <>
        <img src="av1.jpeg" alt="voltas logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="wv1.webp" className='img wv' />
          <Card.Body>
            <Card.Title>13,000</Card.Title>
            <Card.Text>
            Voltas Beko 9 kg Semi Automatic Twin Tub Washing machine (WTT90UDX/BKGR4KPTD) Black - ECO Model
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="wv2.webp" className='img wv' />
          <Card.Body>
            <Card.Title>9,000</Card.Title>
            <Card.Text>
            Voltas Beko 7Kg Semi Automatic Top Loading Washing Machine (WTT70DLIM,Burgundy)
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
export default Wvoltas