import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Icons from '../../constants/Icons';
import './details.scss'
import Component from '../../constants/Component';


function DetailsCard({ game }) {
  let { screenshots, title, freetogame_profile_url, thumbnail, description, minimum_system_requirements, developer, release_date, publisher, platform, genre } = game;
  console.log(game);

  return (
    <>
      <Row >
        <Col xl={4} className="position-relative">
          <div className='sidebar control-box'>
            <img src={thumbnail} className='w-100 rounded-2 ' />
            <div className="details__btn-group">
              <Row className='my-2'>
                <div className="col-md-3">
                  <button className='btn btn-dark px-4 fw-fw-bolder py-3'>Free</button>
                </div>
                <div className="col-md-9">
                  <a href={freetogame_profile_url} target={'_blank'} className='btn btn-primary w-100 py-3 fw-bolder '>PLAY NOW <Icons.SignOut /></a>
                </div>
              </Row>
            </div>
          </div>
        </Col>
        <Col xl={8}>
          <h1>{title}</h1>
          <h5 className='pt-3'>About {title}</h5>
          <p className=' gameDetails__p'>{description}</p>
          <h4 className='mt-4'>Forge of Empires Screenshots</h4>
          <Component.Slider game={game} />
          <h2 className='py-5'>Additional Information</h2>
          <Component.DetailsFooter game={game} />
        </Col>
      </Row>
    </>
  )
}

export default DetailsCard


  // const [imageSrc, setImageSrc] = useState(screenshots.map(e=>e.image)[0])
  // const images=()=>{
  //   setImageSrc(screenshots.map(e=>e.image))
  // };
  // function ImagePath() {
  //   let random_image=Math.floor(Math.random()* images.length)
  //   setImageSrc(images[random_image])
  //   console.log(imageSrc);
  // }
  // useEffect(() => {
  //   // ImagePath()

  // }, [imageSrc])