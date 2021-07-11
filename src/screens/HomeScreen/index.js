import React from 'react';
import HomeCards from '../../components/presentational/HomeCards';

function HomePage() {
  const data = [
    {
      img: "https://www.easeout.co/images/uploads/react-components-props.png",
      title: "Reactjs components & props",
      detail: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.",
      URL: '/components-props',
    },
    {
      img: "https://media.vlpt.us/images/chloeee/post/bddc986a-3b10-4d98-971c-5e9a54858838/KakaoTalk_Photo_2020-10-17-12-56-49.jpeg",
      title: "Reactjs state & props",
      detail: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.",
      URL: '/state-lifectycle',
    },
    {
      img: "https://www.nicesnippets.com/upload/blog/1599743496_onMouseDown,%20%20onMouseUp,%20onMouse-min.png",
      title: "Reactjs handling events",
      detail: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.",
      URL: '/handle-events',
    }
  ]
  return (
    <div className="homepage">
      <HomeCards data={data}/>
    </div>
  )
}
export default HomePage;