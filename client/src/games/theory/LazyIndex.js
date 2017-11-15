import LazyWrapper from '../../components/LazyWrapper';
import React, {Component} from 'react';
import {injectAsyncReducer, removeAsyncReducer} from '../../configureStore';

class LazyIndex extends Component {

  componentWillUnmount() {
    removeAsyncReducer(this.props.store, 'theory');
  }

  render() {
    return (<LazyWrapper store={this.props.store} getComponent={() => {
      return Promise.all([
        import('./index'),
        import('./reducers')
      ]).then(modules => {
        const [componentModule, reducerModule] = modules;

        // inject async reducer
        injectAsyncReducer(this.props.store, 'theory', reducerModule.default);

        return componentModule.default;
      })
    }} />)
  }
}

export default LazyIndex;


