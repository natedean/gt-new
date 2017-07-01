import React from 'react';
import LazyWrapper from '../LazyWrapper';


export default () => (<LazyWrapper getComponent={() =>
  import('./index').then(module => module.default)
}/>);
