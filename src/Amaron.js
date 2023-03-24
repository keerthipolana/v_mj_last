import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Amaron(){
    return(
        <>
        




        

      <img src="amaron.jpeg" alt="amaron logo" width="200px" /><br/>
      
      


    <CardGroup>
      <Card className='card rspace'>
        <Card.Img variant="top" src="am1.jpg" className='img' />
        <Card.Body>
          <Card.Title>3,500</Card.Title>
          <Card.Text>
          Amaron Go-38B20L Car Battery Pric
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left rspace'>
        <Card.Img variant="top" src="am2.jpg" className='img' />
        <Card.Body>
          <Card.Title>6,000</Card.Title>
          <Card.Text>
          Amaron Flo 66Ah Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="am3.jpg" className='img' />
        <Card.Body>
          <Card.Title>5,300</Card.Title>
          <Card.Text>
          Amaron BL-700RMF 65Ah Car Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="am4.jpg" className='img am4' />
        <Card.Body>
          <Card.Title>12,100</Card.Title>
          <Card.Text>
          Amaron Inverter 150AH Tall Tubular Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="am5.jpg" className='img ' />
        <Card.Body>
          <Card.Title>6,800</Card.Title>
          <Card.Text>
        
          Amaron Go-105D26R Car Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="am6.jpg" className='img ' />
        <Card.Body>
          <Card.Title>4,400</Card.Title>
          <Card.Text>
          Amaron FL-00042B20R Car Battery Price

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="am7.jpg" className='img ' />
        <Card.Body>
          <Card.Title>5,300</Card.Title>
          <Card.Text>
          Amaron FL-BH45D20L-BH Car Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="am8.jpg" className='img' />
        <Card.Body>
          <Card.Title>6,500</Card.Title>
          <Card.Text>
          Amaron Flo 65AH Battery Price

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="am9.jpg" className='img' />
        <Card.Body>
          <Card.Title>13,100</Card.Title>
          <Card.Text>
          Amaron 165AH Tall Tubular Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="am10.jpg" className='img am4' />
        <Card.Body>
          <Card.Title>11,000</Card.Title>
          <Card.Text>
          Amaron Inverter 150AH Battery Price
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
<div className='link'>
<Link to="/Aboutamaron" > ABOUT AMARON</Link>
</div>
        


     

        </>
    )
}
export default Amaron