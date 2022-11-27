import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Component from '../../constants/Component'
import icon from '../../constants/Icons'
import useFetch from '../../Hook/useFetch';

function Home() {
  let { game, loading } = useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, 3)
console.log(game);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Game Over</title>
      </Helmet>
      {
        loading?<Component.Loading /> :
          <>
            <Component.Header />
            <Container>
              <h2 className='home__header d-flex py-4  d-flex  gap-2'> <icon.Robot size={37} />  Personalized Recommendations</h2>
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
