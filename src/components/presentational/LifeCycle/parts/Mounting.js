import React from 'react';
class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  // Api componentWillMount,componentWillReceiveProps, componentWillUpdate ko duoc xai o ban react > 18

  // componentWillMount() {  
  //   this.setState({ color: "blue"});
  //   console.log("componentWillMount da chay");
  // }

  // Thay the bang ham function moi : getDerivedStateFromProps 
  // Ham nay thay the cho ham componentWillReceiveProps
  static getDerivedStateFromProps(nextProps, currentState) {
    // Bat ki khi nao cai  
    if (nextProps.color !== currentState.color) {
     return { color: nextProps.color}
    }
    return null;
  }

  componentDidMount() {
    this.setState({ color: "pink"});
    console.log("componentDidMount da chay");
  }

  render() {
    console.log("Render da chay")
    return (
      <div className="mouting">
        <button onClick={() => {this.setState({color: 'red'})}}>
          Submit
        </button>
        <p>{this.state.color}</p>
      </div>
    )
  }
}
export default Mounting;