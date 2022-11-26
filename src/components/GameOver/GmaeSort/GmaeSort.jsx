import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Component from '../../../constants/Component';
import useFetch from './../../../Hook/useFetch';

function GmaeSort() {
  let { sortBy } = useParams();

  const [number, setNumber] = useState(20);

  let { game, loading } = useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortBy}`, number)
  const moreGame = () => setNumber(number + 20);
  
  useEffect(() => {

  }, [sortBy, number])


  return (
    <>
      <Component.ItemGames game={game} loading={loading} moreGame={moreGame} />
    </>
  )
}

export default GmaeSort
