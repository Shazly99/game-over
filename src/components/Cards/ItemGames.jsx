import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Component from '../../constants/Component';

function ItemGames({ game, loading, moreGame }) {
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

export default ItemGames
