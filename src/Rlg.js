import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';

function Rlg(){
    return(
      <>
      <img src="lg.jpeg" alt="lg logo" width="100px" /><br/>
      
      


    <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src="rg1.webp" className='img' />
        <Card.Body>
          <Card.Title>16,700</Card.Title>
          <Card.Text>
          LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-B201ASPY, Scarlet Plumeria, Moist 'N' Fresh, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card left'>
        <Card.Img variant="top" src="rlg2.webp" className='img' />
        <Card.Body>
          <Card.Title>24,000</Card.Title>
          <Card.Text>
          LG 423 L 3 Star Frost-Free Smart Inverter Wi-Fi Double Door Refrigerator (GL-T422VESX, Ebony Sheen, Convertible & Door Cooling+, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg3.jpg" className='img' />
        <Card.Body>
          <Card.Title>20,500</Card.Title>
          <Card.Text>
          LG 190L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ABEZ, Blue Euphoria, Base stand with drawer, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg4.jpg" className='img size' />
        <Card.Body>
          <Card.Title>20,700</Card.Title>
          <Card.Text>
          LG 204 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D211HERZ, Ebony Regal, Base stand with drawer, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg5.jpg" className='img size' />
        <Card.Body>
          <Card.Title>24,000</Card.Title>
          <Card.Text>
        
LG 246 L 3 Star Frost-Free Smart Inverter Wi-Fi Double Door Refrigerator (GL-T262TDSX, Dazzle Steel, Door Cooling+ & Convertible, Gross Volume -263L)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg6.jpg" className='img size' />
        <Card.Body>
          <Card.Title>18,300</Card.Title>
          <Card.Text>
          LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCY, Scarlet Charm, Base stand with Drawer, 2022 Model)

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg7.webp" className='img ' />
        <Card.Body>
          <Card.Title>14,500</Card.Title>
          <Card.Text>
          LG 185 L 3 Star Direct-Cool Single Door Refrigerator (GL-B199OBED, Blue Euphoria, 2023 Model, Fastest Ice Making)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg8.jpg" className='img size' />
        <Card.Body>
          <Card.Title>29,000</Card.Title>
          <Card.Text>
          LG 272 L 2 Star Frost-Free Smart Inverter Double Door Refrigerator (GL-N312SDSY, Dazzle Steel, Express Freeze)

          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg10.webp" className='img' />
        <Card.Body>
          <Card.Title>13,000</Card.Title>
          <Card.Text>
          LG 190 L 2 Star Direct-Cool Single Door Refrigerator (GL-B199OPRC, Peppy Red, Fast Ice Making, 2022 Model)
          </Card.Text>
        </Card.Body>
        </Card>
      <Card className='card top'>
        <Card.Img variant="top" src="rlg9.webp" className='img' />
        <Card.Body>
          <Card.Title>17,800</Card.Title>
          <Card.Text>
          LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201APZU, Shiny Steel, Base stand with drawer)
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
export default Rlg