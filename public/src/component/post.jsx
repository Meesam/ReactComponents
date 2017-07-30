import React,{Component,PropTypes} from 'react';
import axios from 'axios';
import URL from '../../../appconfig';
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

/*
* export function UserFromToken(tokenFromStorage) {
 const request = axios({
 method: 'get',
 url: `${URL.ROOT_URL}/userfromtoken?token=${tokenFromStorage}`,
 headers:[]
 });

 return {
 type: USER_FROM_TOKEN,
 payload: request
 };
 }*/



class Post extends Component{
  constructor(props){
    super(props)
  }

  getEmpList(){
   let url= `${URL.ApiUrl}/emp`;
    console.log('url ' , url);
    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount(){
    this.getEmpList();
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