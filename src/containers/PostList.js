import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/PhotoGallery.css'
import PostListItem from '../components/PostListItem';
import { fetchPosts } from '../actions/postActions'
class PostList extends Component {
    
    componentDidMount() {
        this.props.dispatchFetchPosts()
    }
    
    render() {
        return (
            <div className="PhotoGallery__root">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)