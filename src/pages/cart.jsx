import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const CartData = () => {
    const Cart=useSelector((state)=>state)

    const ans= Cart.map((key)=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={key.image} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    ))
  return (
    <div>
        <h1>Cart</h1>
         {ans}
      
    </div>
  )
}

export default CartData
