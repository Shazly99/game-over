import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import Component from '../../constants/Component'
import icon from '../../constants/Icons'
import useFetch from '../../Hook/useFetch';

function Home() {
  let { game, loading } = useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, 3)

  return (
    <>
      {
        loading ? <Component.Loading /> :
          <>
            <Component.Header />
            <Container> 
              <h3 className='home__header d-flex py-4 '> <icon.Robot />  Personalized Recommendations</h3>
              <Row  >
                <Component.Item game={game} />
              </Row>
            </Container>
          </>
      } 
    </>
  )
}

export default Home