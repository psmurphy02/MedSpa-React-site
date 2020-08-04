import React, { Component } from 'react'
import { withRouter } from 'react-router';

class Title extends Component {
    
    render() {
        const path = this.props.location.pathname.slice(1);

        return (
            <div>
                <h1>{path}</h1>
            </div>
        );
    }
}

export default withRouter(Title);