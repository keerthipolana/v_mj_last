import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Rbpl(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="bpllogo.jpeg" alt="philips  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="rbpl1.jpeg" className='img' />
          <Card.Body>
            <Card.Title>15,000</Card.Title>
            <Card.Text>
            BPL 193 litres 3 Star Single Door Refrigerator Even Flow Technology,Shiny Steel BRD-2100AVSS(491903163)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="rbpl2.jpeg" className='img' />
          <Card.Body>
            <Card.Title>27,000</Card.Title>
            <Card.Text>
            
            BPL 340 litres Frost Free Double Door Refrigerator with DC Inverter Technology, Stainless Steel, BRF-3600AVSS(492284020)

            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          
  <div className='link'>
  <Link to="/Aboutbpl" > ABOUT BPL</Link>
  </div>

        </>
    )
}
export default Rbpl