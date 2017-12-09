import React, {Component} from 'react';
import LazyWrapper from '../../components/LazyWrapper';
import {injectAsyncReducer, removeAsyncReducer} from '../../configureStore';

class LazyIndex extends Component {

  componentWillUnmount() {
    removeAsyncReducer(this.props.store, 'nameThisNote');
  }

  render() {
    return (<LazyWrapper store={this.props.store} getComponent={() => {
      return Promise.all([
        import('./containers/index'),
        import('./reducers')
      ]).then(modules => {
        const [componentModule, reducerModule] = modules;

        // inject async reducer
        injectAsyncReducer(this.props.store, 'nameThisNote', reducerModule.default);

        return componentModule.default;
      })
    }} />)
  }
}

export default LazyIndex;
