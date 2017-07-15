import React,{Component,PropTypes} from 'react';
import Blog from './blog.jsx';


const blogs=[{
  name:'Meesam',
  post:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi at aut dolor fugit labore magnam maiores minima, 
  neque nihil nostrum odit optio provident repellendus saepe tenetur ullam ut vero!`
},{name:'Brijesh',
  post:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi at aut dolor fugit labore magnam maiores minima, 
  neque nihil nostrum odit optio provident repellendus saepe tenetur ullam ut vero!`
}
]


const prp={
  posts:blogs,
  name:'Meesam',
  address:'Kanpur',
  mobile:'99999'
}

class Post extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Blog {...prp}></Blog>
      </div>
    )
  }
}

export default Post;