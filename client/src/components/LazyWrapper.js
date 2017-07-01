import React from 'react';
import LoadingIcon from './LoadingIcon';

class LazyWrapper extends React.Component {
    state = { Component: null };

    componentWillMount() {
        if (!this.state.Component) {
            this.props.getComponent().then(Component => {
                this.setState({ Component })
            })
        }
    }

    render() {
        const { Component } = this.state;

        if (Component) {
            return <Component {...this.props} />
        }

        return (<LoadingIcon/>)
    }
}

export default LazyWrapper;
