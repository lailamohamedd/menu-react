import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { motion } from "framer-motion"

const ItemsList = ({itemsData}) => {
  return (
    <Row>
      {
        itemsData.length >= 1 ? (itemsData.map((item)=> {
          return (
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            >
            <Col key={item.id} sm="12" className='mb-3'>
              <Card className='d-flex flex-row' style={{backgroundColor: 'transparent'}}>
                <Card.Img variant="top" className='img-item' src={item.imgUrl} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                        <div className='item-title'>{item.title}</div>
                        <div className='item-price'>{item.price}</div>
                    </Card.Title>
                    <Card.Text className='py-2'>
                        <div className='item-desc'>{item.desc}</div>
                    </Card.Text>
                  </Card.Body>
              </Card>
            </Col> 
          </motion.div>
          )
        })) : <h3 className="text-center">لا يوجد اصناف</h3>
      }
    </Row>
  )
}

export default ItemsList
