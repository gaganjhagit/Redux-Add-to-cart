import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addtocart } from '../cartSlice';



const Home = () => {
   const [data,setData]= useState([])
   
   const dispatch = useDispatch()

    const loadData=async()=>{
        let api="http://localhost:4000/components"
       const res =await axios.get(api)
       setData(res.data)
    }
    useEffect(()=>{
        loadData()
    },[])

    const ans= data.map((key)=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={key.image} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(addtocart(key))}}>Add to cart</Button>
        </Card.Body>
      </Card>
    ))
  return (
    <div>
        {ans}
        
    </div>
  )
}

export default Home
