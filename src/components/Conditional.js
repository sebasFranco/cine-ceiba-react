import React, {Component} from 'react'
import {PurchasesList} from './Purchases'
import {ChairsList} from './Chairs'

export class ConditionalSection extends Component{
  constructor(props){
    super(props)
    this.state = {showData: false}
  }

  componentWillReceiveProps(nextProps){
      this.setState({showData: nextProps.estado})
  }

  render(){
    return(
      <div>
        {this.state.showData ? <PurchasesList /> : <ChairsList />}
      </div>
    )
  }
}
