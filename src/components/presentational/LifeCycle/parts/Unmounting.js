import React from 'react';
class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    console.log(this.state.date);
  }

  render() {
    return (
      <div>
        *** UNMOUNTING ***
       <h1>{this.state.date.toLocaleTimeString()}</h1>
       *** END OF UNMOUNTING ***
      </div>
    )
  }
}
export default Unmounting;