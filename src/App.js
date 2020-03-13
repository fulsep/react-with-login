import React from 'react'
import {Container} from 'reactstrap'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'

import history from './utils/history'

import Login from './pages/Login'
import Home from './pages/Home'

import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Detail from './pages/Detail'

import Navbar from './components/NavigationBar'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: false
    }
    this.loginHandler = ()=>{
      this.setState({login: true})
    }
    this.logoutHandler = ()=>{
      this.setState({login: false})
    }
  }
  componentDidMount(){
    if(window.localStorage.getItem('jwt')){
      this.setState({login: true})
    }else{
      this.setState({login: false})
    }
  }
  render(){
    return(
      <BrowserRouter>
        <Router history={history}>
          <Navbar isLogin={this.state.login}/>
          <Container className='mt-5'>
            <Switch>
              <Route path='/' render={(props)=><Home {...props} />} exact />
              <Route path='/about' render={(props)=><About {...props} isLogin={this.state.login}/>} exact />
              <Route path='/contact-us' render={(props)=><ContactUs {...props} />} exact />
              <Route path='/login' render={(props)=><Login {...props} login={this.loginHandler} />} exact />
              <Route path='/detail/:id' render={(props)=><Detail {...props}/>} />
            </Switch>
          </Container>
        </Router>
      </BrowserRouter>
    )
  }
}

export default App