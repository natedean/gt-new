import React, {Component} from 'react';
import LazyWrapper from '../../components/LazyWrapper';
import {injectAsyncReducer, removeAsyncReducer} from '../../configureStore';

class LazyIndex extends Component {
  render() {
    return (<LazyWrapper getComponent={() => {
      return Promise.all([
        import('./index'),
      ]).then(modules => {
        const [componentModule] = modules;

        return componentModule.default;
      })
    }} />)
  }
}

export default LazyIndex;
