import React from 'react';
import { useParams } from 'react-router';
import Products from '../demoData/Products';
function Welcome(props) {
  return (
    <div className="welcome">
      <h1>
        Hello, {props.name}
      </h1>
    </div>
  )
}
export default Welcome;