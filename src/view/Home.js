import React, { Component } from 'react'
import '../styles/Home.css'
import PostList from '../containers/PostList';

export default class Home extends Component {
    render() {
        return (
            <div className="Home__root container">
                 <PostList />
            </div>
        )
    }
}
