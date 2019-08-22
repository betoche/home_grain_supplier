import React, { Component } from 'react';
import '../css/menu.scss';
import ElementoMenuIzquierda from './ElementoMenuIzquierda.js';
import ElementoMenuCentro from './ElementoMenuCentro.js';
import ElementoMenuDerecha from './ElementoMenuDerecha.js';

class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state = { title : "Hello unchanged title prueba" };
    }

    getClick()
    {
        alert(this.state.title);
    }

    render() {
        return (
            <div className="menu"
            onClick = {this.getClick.bind(this)}>
                <ElementoMenuIzquierda/>
                <ElementoMenuCentro/>
                <ElementoMenuDerecha/>
                {this.state.title} | {this.props.modifiedTitle}
            </div>
        );
    }
}

export default Menu;