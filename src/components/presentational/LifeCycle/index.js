import React from 'react';
import Mounting from './parts/Mounting';
import Unmounting from './parts/Unmounting';
import Updating from './parts/Updating';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "It's not Mount",
      list: 'blue'
    }
  }
  componentDidMount() {
    setInterval(
      () => this.handleChange(),
      5000
    )
  }

  handleChange() {
    this.setState({
      color: "Mounted",
      list: "blueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblueblue"
    })
  }

  render() {
    return (
      <div className="life-cycle">
        <Mounting color={this.state.color}/>
        <Unmounting />
        <Updating list={this.state.list}/>
      </div>
    )
  }
}
export default LifeCycle;