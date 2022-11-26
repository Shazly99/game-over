import React, {  useState } from 'react' 
import { Container, Row } from 'react-bootstrap';
import Component from '../../../constants/Component';
import useFetch from './../../../Hook/useFetch';

function Games() {
  const [number, setNumber] = useState(20);
  let { game, loading } = useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, number)
  const moreGame = () => setNumber(number + 20);

  return (
    <>
      {
        loading ? <Component.Loading /> :

          <Container className='container-xxl m-top'>
            <Row>
              <Component.AllGames game={game} />
            </Row>
            <div className="more-list d-flex justify-content-center p-4">
              <button onClick={moreGame} className=' m-auto btn btn-outline-secondary'>More Games</button>

            </div>
          </Container>
      }

    </>
  )
}

export default Games