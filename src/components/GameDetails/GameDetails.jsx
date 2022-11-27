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
      {
        loading ? <Component.Loading /> :

          <Container className='m-top position-relative  '>
            <div className="gameprofile_background" 
              style={{ backgroundImage: `url(${game?.screenshots?.map(e=>  e.image)[Math.floor(Math.random()*3)]})` }} > 
              <div class="gameprofile_gradient"></div> </div>
            <Component.DetailsCard game={game} />
          </Container>
      }
    </>
  )
}

export default GameDetails
