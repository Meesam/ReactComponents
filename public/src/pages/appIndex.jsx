import React,{Component} from 'react';
import App from '.././component/app.jsx';

export default class AppIndex extends Component{
  render(){
    return(
      <App>
        {this.props.children}
      </App>
    );
  }
}