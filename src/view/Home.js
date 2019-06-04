import React, { Component } from 'react'
import '../styles/Home.css'
import Spinner from '../components/Spinner';
import PostList from '../containers/PostList';

export default class Home extends Component {
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillMount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const totalHeight = document.body.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollY = window.scrollY
        console.log(scrollY + innerHeight, totalHeight)
        if (scrollY + innerHeight >= totalHeight) {
            console.log('last page')
        } else { 
            console.log('not')
        }
    }

    render() {
        return (
            <div className="Home__root container">
                <PostList />
                <div className="PhotoGallery__spinner-container">
                    <Spinner />
                </div>
            </div>
        )
    }
}
