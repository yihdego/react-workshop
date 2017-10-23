import React, {Component} from 'react'


class Content extends Component {
  render(){

    return(
      <div>
        <div className="summary">
        {this.props.summary}
        </div>
        <div className="promotions">
          {this.props.promotions.map(promotion => <li className="promotion">{promotion}</li>)}
        </div>
      </div>
    )
  }
}

export default Content;
