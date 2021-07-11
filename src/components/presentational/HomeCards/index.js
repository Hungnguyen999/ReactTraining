import React from 'react';
import './styles/homecards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HomeCards(props) {
  const data = props.data
  return (
    <>
      <h1 className="homepage__title">Main concepts reactjs</h1>
      <div className="homepage__item">
        {data.map((item) =>
          <a href={item.URL} className="home-cards">
            <div className="home-cards__img">
              <img src={item.img} />
            </div>
            <div className="home-cards__title">
              <h2>{item.title}</h2>
            </div>
            <div className="home-cards__detail">
              <p>{item.detail}</p>
            </div>
            <div className="home-cards__start-button">
              <span class="link">Start here <FontAwesomeIcon icon={ faArrowRight }/> </span>
            </div>
          </a>
        )}
      </div>
    </>
  
  )
}
export default HomeCards;