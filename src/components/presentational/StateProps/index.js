import React from 'react';
import Clock from './parts/Clock';

class StateProps extends React.Component {
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
       <Clock data={this.state.date.toLocaleTimeString()}/>
      </div>
    )
  }
}
export default StateProps;