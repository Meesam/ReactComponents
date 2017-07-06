import React ,{Component} from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Messages</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><i class="fa fa-server fa-2x" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container text-center">
        {this.props.children}
      </div>
    </div>


    );
  }
}

export default App;