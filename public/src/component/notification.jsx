import React, {Component,PropTypes} from 'react'

class Notification extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="list-group">
        <a href="#" className="list-group-item active">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Just Forgot that I had to mention something about someone to someone about how</p>
        </a>
      </div>
    )
  }
}

export default Notification;