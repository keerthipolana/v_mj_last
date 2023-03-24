import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

function Rsamsung(){
    return(
        <>
        

      <img src="samlogo.jpeg" alt="samsung logo" width="200px" /><br/>
      
      


    <CardGroup>
      <Card className='card rspace'>
        <Card.Img variant="top" src="rsam1.webp" className='img' />
        <Card.Body>
          <Card.Title>35,000</Card.Title>
          <Card.Text>
          Samsung 324 L 3 Star Inverter Frost Free Double Door Refrigerator (RT34T4513S8/HL, Convertible 5In 1, Elegant Inox)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left rspace'>
        <Card.Img variant="top" src="rsam2.webp" className='img' />
        <Card.Body>
          <Card.Title>18,000</Card.Title>
          <Card.Text>
          Samsung 183 L 2 Star Inverter Direct-Cool Single Door Refrigerator (RR20C2Z226U/NL, Mystic Overlay Blue, Base Stand with Drawer)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="sam3.webp" className='img' />
        <Card.Body>
          <Card.Title>13,000</Card.Title>
          <Card.Text>
          Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam4.webp" className='img ' />
        <Card.Body>
          <Card.Title>20,700</Card.Title>
          <Card.Text>
          Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2XCR/HL, Camellia Purple, Base Stand with Drawer)- 2022 Model
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam5.webp" className='img ' />
        <Card.Body>
          <Card.Title>54,000</Card.Title>
          <Card.Text>
        
          Samsung 465L 3 Star Frost-Free Double Door Digital Inverter Refrigerator (RT47B623ESL/TL, Steel, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam6.webp" className='img ' />
        <Card.Body>
          <Card.Title>21,000</Card.Title>
          <Card.Text>
          Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2XCR/HL, Camellia Purple, Base Stand with Drawer)- 2022 Model

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam7.webp" className='img ' />
        <Card.Body>
          <Card.Title>16,000</Card.Title>
          <Card.Text>
          Samsung 198 L 3 Star Inverter Direct Cool Single Door Refrigerator (RR21A2C2YUT/HL, Pebble Blue, Digi-Touch Cool)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam8.webp" className='img' />
        <Card.Body>
          <Card.Title>18,000</Card.Title>
          <Card.Text>
          Samsung 189 L 5 Star Inverter Direct-Cool Single Door Refrigerator(RR21C2H25S8/HL)

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam9.webp" className='img' />
        <Card.Body>
          <Card.Title>25,000</Card.Title>
          <Card.Text>
          Samsung 236L 2 Star Inverter Frost Free Double Door Refrigerator (RT28C3922CR/HL, Camellia Purple/Red, Convertible 3-in-1)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rsam10.webp" className='img rsam' />
        <Card.Body>
          <Card.Title>14,000</Card.Title>
          <Card.Text>
          Samsung 183 L 2 Star Inverter Direct-Cool Single Door Refrigerator (RR20C20C26R/NL, Mystic Overlay Red)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
<div className='link'>
<Link to="/Aboutsamsung" > ABOUT SAMSUNG</Link>
</div>
        


     

        </>
    )
}
export default Rsamsung