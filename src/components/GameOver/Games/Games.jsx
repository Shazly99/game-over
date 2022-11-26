import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Component from '../../../constants/Component';
import useFetch from './../../../Hook/useFetch';

function Games() {
  const [number, setNumber] = useState(20);
  let { game, loading } = useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`, number)
  const moreGame = () => setNumber(number + 20);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Games</title>
      </Helmet>
      <Component.ItemGames game={game} loading={loading} moreGame={moreGame} />

    </>
  )
}

export default Games