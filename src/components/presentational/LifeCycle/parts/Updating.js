import React from 'react';
class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      console.log("asdasdas",  list)
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
      console.log("asdasdas",  list)
    }
  }

  render() {
    return (
      <>
      **** UPDATING METHOD ****
      <div style={{marginTop: "5000px"}} ref={this.listRef}>{this.props.list}</div>
      </>
    );
  }
}
export default Updating;