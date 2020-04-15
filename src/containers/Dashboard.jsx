import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import SidePanel from '../components/SidePanel';
import InventoryGraphicalPanel from '../components/InventoryGraphicalPanel';
import InventoryCardPanel from '../components/InventoryCardPanel';

import './App.css';

class Dasboard extends Component {

    render = () => {
        return (
            <div id="layoutSidenav">
                <SidePanel />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h4 className="mt-4">Overview</h4>
                            <InventoryGraphicalPanel />
                            <InventoryCardPanel />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Radium(Dasboard);