import React, { Component } from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class CardItems extends Component {
  render() {
    return (
      <Card className='mt-5'>
        <CardImg top width='100%' src='https://via.placeholder.com/150' alt='Item'/>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>Rp.{this.props.price},-</CardSubtitle>
          <Link to={`/detail/${this.props.id}`} className='btn btn-block btn-primary'>Buy</Link>
          <Button block>Add to Cart</Button>
        </CardBody>
      </Card>
    )
  }
}
