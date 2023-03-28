import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './style.css'
function Home(){
    return(
        <>
        <center>
        <b><h1 className="home bounce">Natraj Electronics Shoppe</h1></b>
        <h5>Key Principle:MaheshBabu.Polana</h5>
        </center>

        {/* <div>
<center> <img src="shop.webp" alt="Shop" width="700px"/></center>
           
        </div> */}
        <div className='carousel'>
        <Carousel fade className="carousel">
      <Carousel.Item >
        <img
          className="d-block w-100 carouseli"
          src="shop.webp"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Natraj Electronics Shoppe</h3>
          <p>Bhimavaram,West Godavari,Andhra Pradesh</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouseli"
          src="natraj4.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Key Principal: MAHESHBABU POLANA </h3>
          <p>Email:polana.maheshbabu@gmail.com</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouseli"
          src="natrajs.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Address</h3>
          <p>
          OPP CHAMBER OF COMMERS, 17-2-26, REST HOUSE ROAD West Godavari, Andhra Pradesh, 534201 India

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        

       
        <h3 className="products"><u>Our Products</u></h3>

       

<div className="card">



    <CardGroup >
      <Card  className='hover1'>
        <Card.Img variant="top" src="fridge.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Refrigerator</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card  className='hover1'>
        <Card.Img variant="top" src="wm.jpeg" />
        <Card.Body>
          <Card.Title>Washing Machine</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>

    <CardGroup >
      <Card  className='hover1'>
        <Card.Img variant="top" src="homethreatre.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Home Theatre</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card className='hover1' >
        <Card.Img variant="top" src="printer.jpeg" />
        <Card.Body>
          <Card.Title>Printer</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>
    <CardGroup >
      <Card className='hover1' >
        <Card.Img variant="top" src="phone.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Phone</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card className='hover1' >
        <Card.Img variant="top" src="laptop.jpeg" />
        <Card.Body>
          <Card.Title>Laptop</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>
 
</div>
<center><b><h3 className="home"><u>MAIN LEAD</u></h3></b></center>
        


    <CardGroup className='founder'>
      <Card className='hover1'>
        <div className='daddy'><Card.Img variant="top" src="daddy.jpg" className='daddy rounded-circle' /></div>
        <Card.Body>
          <Card.Title className='text'>Founder</Card.Title>
          <Card.Text>
            <b><h3>Polana.MaheshBabu</h3></b>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">polana.maheshbabu@gmail.com</small>
        </Card.Footer>
      </Card>
      <Card className='hover1'>
        <Card.Img variant="top" src="amma.jpg" className='amma rounded-circle'/>
        <Card.Body>
          <Card.Title>Co-Founder</Card.Title>
          <Card.Text><b><h3>Polana.DhanaLakshmi</h3></b>
            {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">polana.dhanalakshmi@gmail.com</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>

   

   

        </>
    )
}
export default Home