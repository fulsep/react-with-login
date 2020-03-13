import React, { Component } from 'react'
import jwt from 'jsonwebtoken'

export default class About extends Component {
  componentDidMount(){
    const cred = jwt.decode(window.localStorage.getItem('jwt')) || ''
    if(cred.username !== 'admin'){
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <>
      {this.props.isLogin &&
        <>You're logged</>
      }
      </>
    )
  }
}
