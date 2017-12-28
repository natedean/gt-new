import React, {Component} from 'react';
import {connect} from 'react-redux';
import LazyNameThisNote from '../games/SightReading/LazyIndex';

class Play extends Component {
  render() {
    const view = viewSelector('sight-reading', this.props.store);

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          {view}
        </div>
      </div>
    );
  }
}

const viewSelector = (viewName, store) => {
  switch(viewName) {
    case 'sight-reading':
      return (<LazyNameThisNote store={store}/>);
    default:
      return (<div>No view found</div>)
  }
};



export default connect()(Play);
