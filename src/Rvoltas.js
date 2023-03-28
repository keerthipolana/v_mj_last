import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Rvoltas(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
        <img src="av1.jpeg" alt="voltas logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="rv1.webp" className='img' />
          <Card.Body>
            <Card.Title>16,000</Card.Title>
            <Card.Text>
            Voltas Beko 200 L 4 star Direct Cool Refrigerator,  Dahlia Wine (RDC220B60/DWEXXXXSG)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="rv2.webp" className='img' />
          <Card.Body>
            <Card.Title>18,000</Card.Title>
            <Card.Text>
            Voltas Beko 250L 2 Star Frost free Refrigerator (Inox) RFF2753XICF 2020
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="rv3.webp" className='img' />
          <Card.Body>
            <Card.Title>83,000</Card.Title>
            <Card.Text>
            Voltas Beko RBM743IF 695 Litre Bottom Mounted Refrigerator (Inox Look) Biggest In The Category
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="rv4.webp" className='img ' />
          <Card.Body>
            <Card.Title>54,000</Card.Title>
            <Card.Text>
            Voltas Beko RFF533IF 510 L 3 Star High End Frost Free Double Door Refrigerator (Inox Look)
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
export default Rvoltas