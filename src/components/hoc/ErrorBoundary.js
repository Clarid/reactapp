import React from 'react'

class ComponentName extends React.Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    render() {
        if (this.state.error) {
            return <div style={{color: 'red'}}>Error</div>
        }
        return this.props.children;
    }
}

export default ComponentName