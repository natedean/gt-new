import LazyWrapper from '../LazyWrapper';

export default LazyWrapper(() => {
  return import('./index').then(module => module.default)
})
