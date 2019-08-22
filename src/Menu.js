import React, { Component } from 'react';
import './css/menu.css';

class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state = { title : "Hello unchanged title" };
    }

    getClick()
    {
        alert(this.state.title);
    }

    render() {
        return (
            <div className="menu"
            onClick = {this.getClick.bind(this)}>
                {this.state.title} | {this.props.modifiedTitle}
            </div>
        );
    }
}

export default Menu;