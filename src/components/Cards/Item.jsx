import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ game }) {
 
  return (
    <>
      {
        game?.map((item, index) => (
          <Col key={index} xl={4} md={6} className="mb-4 grow">
            <div className="card overflow-hidden ">
              <Link to={`/gameDetails/${item.id}`}>
                <img src={item.thumbnail} className='w-100' />
              </Link>
              <div className="game-body p-3  ">
                <h4 className='game__body-title'>{item.title}</h4>
                <span className='p-2 badge game__body-free'>FREE</span>
              </div>
            </div>
          </Col>
        ))
      }
    </>
  )
}

export default Item