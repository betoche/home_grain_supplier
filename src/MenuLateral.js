import React, { Component } from 'react';
import './css/menu-lateral.scss';
import OpcionMenu from './OpcionMenu.js';

class MenuLateral extends Component {
    render () {
        return (
            <div className="menu-lateral">
                <ul>
                    <OpcionMenu LinkTo="provider" title="Proveedores" />
                    <OpcionMenu LinkTo="customer" title="Clientes" />
                    <OpcionMenu LinkTo="products" title="Productos" />
                </ul>
            </div>
        );
    }
}

export default MenuLateral;