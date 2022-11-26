import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header   text-center">
        <div className="header__content d-flex flex-column ">
          <div className="header__content-h">
            <h1>Find & track the best <span className='text-blue'>free-to-play</span> games!</h1>
          </div>
          <div className="header__content-p lead text-muted">
            Track what you've played and search for what to play next! Plus get free premium loot!
          </div>
          <div className="header__content-btn mt-3">
            <Link to={'/games/all'} className="btn btn-outline-secondary py-3 px-3 fw-bolder btn-md ml-0">Browse Games</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
