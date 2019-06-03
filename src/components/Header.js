import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import '../styles/Header.css'
import { LOGIN, REGISTER, HOME } from '../constants/route'
export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isAuthen: false
        }
    }
    
    renderHeader = () => {
        // const authenticationToken = localStorage.getItem('authenticationToken')
        const { isAuthen } = this.state
        if (isAuthen) {
            return (
                <ul className="Header__nav-group">
                    <li className="Header__nav-link">
                        <NavLink to="/" activeClassName="NavLink--active">
                            <i className="fa fa-compass Header__nav-icon" aria-hidden="true" />
                        </NavLink>
                    </li>
                    <li className="Header__nav-link Header__notification-nav">
                        {/* <NotificationContainer location={this.props.location} /> */}
                        <NavLink to="/" activeClassName="NavLink--active">
                            <a className="NotificationButton__button" href="#">
                                <i className="fa fa-heart-o Header__nav-icon" aria-hidden="true" />
                            </a>
                        </NavLink>
                    </li>
                    <li className="Header__nav-link">
                        <NavLink to="/" activeClassName="NavLink--active">
                            <i className="fa fa-smile-o Header__nav-icon" aria-hidden="true" />
                        </NavLink>
                    </li>
                </ul>

            )
        } else {
            return (
                <ul className="Header__nav-group">
                    <li className="Header__nav-link">
                        <NavLink to={LOGIN} activeClassName="NavLink--active">Sign In</NavLink>
                    </li>
                    <li className="Header__nav-link">
                        <NavLink to={REGISTER} activeClassName="NavLink--active">Sign Up</NavLink>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <header className="Header__root">
                <div className="container">
                    <div className="row  Header__container">
                        <div className="three columns">
                            <h1 className="Header__logo">
                                <Link to={HOME} className="Header__logo-link">
                                    <i className="fa fa-instagram Header__instagram-icon" aria-hidden="true" />Instagram</Link>
                            </h1>
                        </div>
                        <nav className="offset-by-seven two columns">
                            {/*  cach hien thi header phu thuoc vao authren , neu da authen => hien thi signin va signout */}
                            {this.renderHeader()}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
