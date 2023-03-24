import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import './style.css'
function Products(){
    return(
        <>
 <h3 className="products"><u>Our Products</u></h3>

       

<div className="card">



    <CardGroup >
      <Card>
        <Card.Img variant="top" src="fridge.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Refrigerator</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="wm.jpeg" />
        <Card.Body>
          <Card.Title>Washing Machine</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>

    <CardGroup >
      <Card>
        <Card.Img variant="top" src="homethreatre.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Home Theatre</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="printer.jpeg" />
        <Card.Body>
          <Card.Title>Printer</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>
    <CardGroup >
      <Card>
        <Card.Img variant="top" src="phone.jpeg" className='p1' />
        <Card.Body>
          <Card.Title>Phone</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="laptop.jpeg" />
        <Card.Body>
          <Card.Title>Laptop</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>
    </div>
       </>
    )
}
export default Products