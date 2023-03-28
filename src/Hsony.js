import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Hsony(){
    return(
        <>
        <b><h1 className='A'>Natraj Electronics Shoppe</h1></b>
         <img src="sony.jpeg" alt="eastman  logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace hover1'>
          <Card.Img variant="top" src="hs1.webp" className='img' />
          <Card.Body>
            <Card.Title>18,000</Card.Title>
            <Card.Text>
            Sony HT-S20R Real 5.1ch Dolby Digital Soundbar for TV with subwoofer and Compact Rear Speakers, 5.1ch Home Theatre System (400W,Bluetooth & USB Connectivity, HDMI & Optical connectivity)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace hover1'>
          <Card.Img variant="top" src="hs2.webp" className='img' />
          <Card.Body>
            <Card.Title>10,000</Card.Title>
            <Card.Text>
            Sony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hs3.webp" className='img' />
          <Card.Body>
            <Card.Title>25,000</Card.Title>
            <Card.Text>
            Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch Home Theatre System (600W, Bluetooth & USB Connectivity, HDMI & Optical Connectivity, Sound Mode)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hs4.webp" className='img am4' />
          <Card.Body>
            <Card.Title>41,000</Card.Title>
            <Card.Text>
            Sony HT-S700RF Real 5.1ch Dolby Audio Soundbar for TV with Tall boy Rear Speakers & Subwoofer, 5.1ch Home Theatre System (1000W, Bluetooth & USB Connectivity,HDMI & Optical Connectitvity)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hs5.webp" className='img ' />
          <Card.Body>
            <Card.Title>37,000</Card.Title>
            <Card.Text>
          
            Sony HT-S700RF Real 5.1ch Dolby Audio Soundbar for TV with Tall boy Rear Speakers & Subwoofer, 5.1ch Home Theatre System (1000W, Bluetooth & USB Connectivity,HDMI & Optical Connectitvity)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top hover1'>
          <Card.Img variant="top" src="hs6.webp" className='img ' />
          <Card.Body>
            <Card.Title>1,97,000</Card.Title>
            <Card.Text>
          
            Sony HT-A9 A Series Premium Home Theatre System 7.1.4ch 360 SSM Wireless Multi-Dimensional Surround Sound Experience with Wireless Subwoofer SA-SW5 (Hi Res & 360 RA, Dolby Atmos, 8K/4K HDR)
            </Card.Text>
          </Card.Body>
          </Card>
        
          </CardGroup>
  <div className='link'>
  <Link to="/Aboutsony" > ABOUT SONY</Link>
  </div>
        </>
    )
}
export default Hsony