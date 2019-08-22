import React, { Component } from 'react';

class OpcionMenu extends Component {
    render() {
        return(
            <li className = "opcion-menu-lateral">
                <a href={this.props.LinkTo}>
                { this.props.title }
                </a>
            </li>
        );
    }
}

export default OpcionMenu;