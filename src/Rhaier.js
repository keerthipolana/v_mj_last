import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Rhaier(){
    return(
        <>



        

      <img src="haierlogo.jpeg" alt="haier logo" width="200px" /><br/>
      
      


    <CardGroup>
      <Card className='card rspace'>
        <Card.Img variant="top" src="rh1.webp" className='img' />
        <Card.Body>
          <Card.Title>11,000</Card.Title>
          <Card.Text>
          Haier 165 L 1 Star Single Door Refrigerator (HED-171RS-P, Red Steel,2023 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left rspace'>
        <Card.Img variant="top" src="rh2.webp" className='img' />
        <Card.Body>
          <Card.Title>15,000</Card.Title>
          <Card.Text>
          Haier 190 L 4 Star Single Door Refrigerator (HED-204DS-P, Dazzle Steel,2023 Model)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rh3.webp" className='img' />
        <Card.Body>
          <Card.Title>14,000</Card.Title>
          <Card.Text>
          Haier 185 L 2 Star Single Door Refrigerator (HED-19TMF-N, Marine Peony)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rh4.webp" className='img ' />
        <Card.Body>
          <Card.Title>12,700</Card.Title>
          <Card.Text>
          Haier 175 L 2 Star Single Door Refrigerator (HED-182ME-N, Marine Erica,2023 Model)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rh5.webp" className='img ' />
        <Card.Body>
          <Card.Title>15,000</Card.Title>
          <Card.Text>
        
          Haier 185 L 2 Star Single Door Refrigerator (HED-19TGG-N, Holyleaf Glass, Glass,2023 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rh6.webp" className='img ' />
        <Card.Body>
          <Card.Title>37,000</Card.Title>
          <Card.Text>
          Haier 325 L 3 Star Frost Free Bottom Mounted Refrigerators with Triple Inverter Compressor (HEB-333DS-P,Dazzle Steel, Convertible, Inverter,2023 Model)

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rh7.webp" className='img ' />
        <Card.Body>
          <Card.Title>16,000</Card.Title>
          <Card.Text>
          Haier 195L 5 Star with Inverter Direct-Cool Single Door Refrigerator (HED-20FMM -Marine Peony) With Base Drawer
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rh8.webp" className='img' />
        <Card.Body>
          <Card.Title>64,000</Card.Title>
          <Card.Text>
          Haier 630 L Double Door Side By Side Refrigerators, Expert Inverter Technology (HRS-682KS, Black Steel,Magic Convertible, Made In India)

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rh9.webp" className='img' />
        <Card.Body>
          <Card.Title>25,000</Card.Title>
          <Card.Text>
          Haier 258 L 3 Star Inverter Frost-Free Double Door Refrigerator (HEF-25TDS, Dazzle Steel, Convertible)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rh10.webp" className='img rsam' />
        <Card.Body>
          <Card.Title>16,000</Card.Title>
          <Card.Text>
          Haier 192 L 3 Star Single Door Refrigerator (HRD-1923PMG-E, Mirror Glass, Base stand)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
<div className='link'>
<Link to="/Abouthaier" > ABOUT HAIER</Link>
</div>
        


     

        </>
    )
}

export default Rhaier