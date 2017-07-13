import React,{Component} from 'react';
import Notification from './notification.jsx';


const style={
  notify:{
    position:"absolute",
    top:100,
    right:10,
    opacity:0.83,
    width:'328px'

  }
}

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      notify:false,
      username:'',
      address:'',
      mobile:''
    }

    this.infoClick=this.infoClick.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.change=this.change.bind(this);
  }

  change(event){
    event.preventDefault();
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  submitForm(event){
    event.preventDefault();
    console.log('sbmit Clicked', this.state);
  }

  infoClick(event){
    event.preventDefault();
    console.log('info Clicked');
    this.setState({
      notify:!this.state.notify
    })
  }

  render(){
    return(
    <div>
      <div className="row">
        <div className="col-sm-3 well">
          <div className="well">
            <p><a href="#">My Profile</a></p>
            <img src="img/bird.jpg" className="img-circle" height="65" width="65" alt="Avatar" />
          </div>

          <div className="alert alert-success fade in">
            <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
            <p><strong>Ey!</strong></p>
            People are looking at your profile. Find out who.
          </div>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
        </div>
        <div className="col-sm-7">

          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default text-left">
                <div className="panel-body">
                  <p>Status: Feeling Blue</p>
                  <button type="button" className="btn btn-default btn-sm">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <div className="well">
                <p>John</p>
                <img src="img/bird.jpg" className="img-circle" height="55" width="55" alt="Avatar" />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="well">
                <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="well">
                <p>Bo</p>
                <img src="img/bandmember.jpg" className="img-circle" height="55" width="55" alt="Avatar" />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="well">
               <form>
                 <div className="row">
                   <div className="col-sm-12">
                     <input type="text" name="username" value={this.state.username} onChange={this.change} className="formcontrol"/>
                   </div>
                   <div className="col-sm-12">
                     <input type="text" name="address" value={this.state.address} onChange={this.change} className="formcontrol"/>
                   </div>
                   <div className="col-sm-12">
                     <input type="text" name="mobile" value={this.state.mobile} onChange={this.change} className="formcontrol"/>
                   </div>
                   <div className="col-sm-12">
                     <input type="submit" onClick={this.submitForm} name="Submit" className="btn btn-primary"/>
                   </div>
                 </div>

               </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="well">
                <p>Jane</p>
                <img src="img/bandmember.jpg" className="img-circle" height="55" width="55" alt="Avatar" />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="well">
                <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="well">
                <p>Anja</p>
                <img src="img/bird.jpg" class="img-circle" height="55" width="55" alt="Avatar" />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="well">
                <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
              </div>
            </div>
          </div>



        </div>
        <div className="col-sm-2 well">
          <div className="thumbnail">
            <p>Upcoming Events:</p>
            <img src="img/paris.jpg" alt="Paris" width="400" height="300" />
            <p><strong>Paris</strong></p>
            <p>Fri. 27 November 2015</p>
            <button className="btn btn-primary" onClick={this.infoClick}>Info</button>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
        </div>


      </div>
      <div style={style.notify}>
          {this.state.notify ? <Notification /> :null}
      </div>
    </div>

    );
  }
}