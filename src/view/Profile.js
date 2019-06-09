import React, { Component } from 'react'
import ProfilePage from '../containers/profile/index'
import '../styles/Profile.css'
export default class Profile extends Component {
    
    render() {
        const { username } = this.props.match.params
        return (
          <div>
              <ProfilePage
                username={username} 
              />
          </div>
        )
    }
}

// profile se duoc dung chung cho 2 component 
// 1. component 1: get list post by username
// 2. component 2: profile of user