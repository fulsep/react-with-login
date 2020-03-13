import React, { Component } from 'react'
import {Row, Col, Jumbotron, FormGroup, Input, Button, Alert} from 'reactstrap'
import jwt from 'jsonwebtoken'
// import cookie from 'js-cookie'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      warning: ''
    }
    this.inputChange = (e, name)=>{
      this.setState({
        [name]:e.target.value,
        warning: ''
      })
    }
    this.login = ()=>{
      if((this.state.username === 'admin') && (this.state.password === 'admin')){
        // from backend
        const credentials = jwt.sign({username:'admin'},'admin')
        // if data get from backend
        window.localStorage.setItem('jwt',credentials)
        this.props.login()
        this.props.history.push('/',{from:'login'})
      } else {
        this.setState({warning:'Wrong username or password'})
      }
    }
  }
  render() {
    return (
      <>
        <Row>
          <Col md={6}>
            <Jumbotron className='text-center'>
              <h3>Welcome</h3>
              <p>Please login to our Platform</p>
            </Jumbotron>
          </Col>
          <Col md={6}>
            <h3 className='text-center'>Enter your credentials</h3>
            {this.state.warning&&(
              <Alert color='danger'>{this.state.warning}</Alert>
            )}
            <FormGroup>
              <Input type='text' onChange={e=>this.inputChange(e,'username')} placeholder='Username' className='mt-3'/>
              <Input type='password' onChange={e=>this.inputChange(e,'password')} placeholder='Password' className='mt-3'/>
              <Button type='submit' block className='mt-3' onClick={this.login}>Login</Button>
            </FormGroup>
          </Col>
        </Row>
      </>
    )
  }
}
