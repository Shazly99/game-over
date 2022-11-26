import React  from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Icons from '../../constants/Icons'; 


function AllGames({ game }) {


  return (
    <>

      {
        game.map((item, index) => (
          <Col key={index} xl={3} md={6} className="mb-4 grow">
            <div className="card overflow-hidden ">
              <Link to={`/gameDetails/${item.id}`}>
                <img src={item.thumbnail} className='w-100' />
              </Link>
              <div className="game-body px-3 pt-3   ">
                <h4 className='game__body-title '>{item.title.split('').slice(0, 18)}...</h4>
                <span className='p-2 badge game__body-free'>FREE</span>
              </div>
              <div className="game__body-p px-3">
                <p className='game__body-title text-muted '>{item.short_description.split('').slice(0, 25)}...</p>
              </div>

              <div className="game__footer px-3">
                <Icons.Plus fontSize={20} />
                <div>
                  <div className="badge bg-secondary text-dark badge-genre me-2">
                    {item.genre}
                  </div>
                  <Icons.Window fontSize={20} />
                </div>
              </div>
            </div>

          </Col>
        ))


      }

    </>

  )
}

export default AllGames