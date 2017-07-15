import React,{Component,PropTypes} from 'react';

class Blog extends Component{
  constructor(props){
    super(props)
  }

  renderpost(bogs){
      return bogs.map((item)=>{
        return(
          <div className="row" key={item.name}>
            <div className="col-sm-3">
              <div className="well">
                <p>{item.name}</p>
                <img src="img/bird.jpg" className="img-circle" height="55" width="55" alt="Avatar" />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="well">
                <p>{item.post}</p>
              </div>
            </div>
          </div>
          )
      })
  }

  render(){
    console.log('props are ' , this.props)
    const {posts,name,address,mobile}=this.props;
    return(
     <div>
       {this.renderpost(posts)}
     </div>
    )
  }
}

Blog.propTypes={
  posts:PropTypes.array,
  name:PropTypes.string,
  address:PropTypes.string,
  mobile:PropTypes.string.isRequired
}

export default Blog;