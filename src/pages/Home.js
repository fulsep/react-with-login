import React, { Component } from 'react'
import {Jumbotron, Row, Col} from 'reactstrap'

import Card from '../components/CardItems'
import {items} from '../utils/items'

export default class Home extends Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <Jumbotron>
          <h1>Welcome to Food Delivery Web</h1>
          <p>This is a web for your favourite Food</p>
        </Jumbotron>
        <Row>
          {items.map((v, i)=>(
            <Col key={i.toString()} md={3}>
              <Card title={v.name} price={v.price} id={v.id} />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
