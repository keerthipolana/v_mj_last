import './style.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
function Tlg(){
    return(
        <>
<img src="lg.jpeg" alt="lg logo" width="200px" /><br/>
      
      


      <CardGroup>
        <Card className='card rspace'>
          <Card.Img variant="top" src="tl1.webp" className='img mit' />
          <Card.Body>
            <Card.Title>81,000</Card.Title>
            <Card.Text>
            LG 164 cm (65 inches) 4K Ultra HD Smart NanoCell TV 65NANO73SQA (Ashed Blue)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card left rspace'>
          <Card.Img variant="top" src="tl2.webp" className='img mit' />
          <Card.Body>
            <Card.Title>31,000</Card.Title>
            <Card.Text>
            LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF (Ceramic Black)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="tl3.webp" className='img mit' />
          <Card.Body>
            <Card.Title>14,000</Card.Title>
            <Card.Text>
            LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="tl4.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>17,000</Card.Title>
            <Card.Text>
            LG 81.28 cm (32 Inches) HD Ready Smart LED TV 32LQ570BPSA (Black) (2022 Model)
            </Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
  
          <CardGroup>
        <Card className='card top'>
          <Card.Img variant="top" src="tl5.jpg" className='img mit ' />
          <Card.Body>
            <Card.Title>39,000</Card.Title>
            <Card.Text>
          
            LG 108 cm (43 Inch) 4K UHD Smart LED TV WebOS Active HDR (43UQ8040PSB_Black)
            </Card.Text>
          </Card.Body>
          </Card>
        <Card className='card top'>
          <Card.Img variant="top" src="tl6.webp" className='img  mit' />
          <Card.Body>
            <Card.Title>40,000</Card.Title>
            <Card.Text>
            LG 109.2 cm (43 Inches) 4K Ultra HD Smart LED TV 43UM7790PTA (Black) (2021 Model)
  
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
export default Tlg