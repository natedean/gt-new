import LazyWrapper from '../LazyWrapper';

export default LazyWrapper(() =>
    import('./index').then(module => module.default)
)