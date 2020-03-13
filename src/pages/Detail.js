import React, { Component } from 'react'
import {Row, Col, Button} from 'reactstrap'

import {items} from '../utils/items'

export default class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: null
    }
  }
  async componentDidMount(){
    this.setState({items:items.filter(o=>o.id===parseInt(this.props.match.params.id))[0]})
  }
  render() {
    return (
      <>
      {this.state.items &&(
        <Row>
          <Col md={6}>
            <img src='https://via.placeholder.com/150' style={{width:'100%'}} className='img-fluid' alt='items' />
          </Col>
          <Col md={6}>
            <h3>{this.state.items.name}</h3>
            <h2>Rp.{this.state.items.price},-</h2>
            <p>{this.state.items.desc}</p>
            <Button block color='primary'>Buy</Button>
            <Button block>Add to Cart</Button>
          </Col>
        </Row>
      )}
      </>
    )
  }
}
