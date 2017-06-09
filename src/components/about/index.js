import React from 'react';
import LazyWrapper from '../LazyWrapper';

export default LazyWrapper(() =>
    import('./About').then(module => module.default)
)