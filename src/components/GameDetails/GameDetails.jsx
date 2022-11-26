import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Component from '../../constants/Component'; 
import useDetails from './../../Hook/useDetails';
 
function GameDetails() {
  let { id } = useParams();
  let { game, loading } = useDetails(id);
  
  return (
    <>

      <Container className='m-top position-relative  '>
        <div className="gameprofile_background" style={{ backgroundImage: `url(https://www.freetogame.com/g/516/pubg-1.jpg)` }} > <div class="gameprofile_gradient"></div> </div>
        <Component.DetailsCard game={game} />
      </Container>
    </>
  )
}

export default GameDetails
