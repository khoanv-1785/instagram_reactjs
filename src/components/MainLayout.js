import React, { Component } from 'react'
import '../styles/MainLayout.css'
import HeaderContainer from '../containers/HeaderContainer';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="MainLayout__root">
               <HeaderContainer />
            </div>
        )
    }
}
