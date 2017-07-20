/**
 * Created by meesam on 20/7/17.
 */


/*
export function getUsers() {
  return [{
    Name:'Brijesh',
    City:'Kanpur'
  },{
    Name:'Meesam',
    City:'Delhi'
  },{
    Name:'Rajesh',
    City:'Noida'
  }];
}


export function getEmployee() {
  return [{
    Name:'Brijesh'
  },{
    Name:'Meesam'
  },{
    Name:'Rajesh'
  }];
}*/

/*
module.exports={
  user: function getUsers() {
    return [{
      Name:'Brijesh',
      City:'Kanpur'
    },{
      Name:'Meesam',
      City:'Delhi'
    },{
      Name:'Rajesh',
      City:'Noida'
    }];
  },
  emp:function getEmployee() {
    return [{
      Name:'Brijesh'
    },{
      Name:'Meesam'
    },{
      Name:'Rajesh'
    }];
  }
}*/

function getUsers() {
  return [{
    Name:'Brijesh',
    City:'Kanpur'
  },{
    Name:'Meesam',
    City:'Delhi'
  },{
    Name:'Rajesh',
    City:'Noida'
  }];
}

function getEmployee() {
  return new Promise((resolve,reject)=>{
    let data=[{
      Name:'Brijesh',
      City:'Kanpur'
    },{
      Name:'Meesam',
      City:'Delhi'
    },{
      Name:'Rajesh',
      City:'Noida'
    }];

    if(data){
      resolve(data)
    } else {
      reject;
    }

  })
}


/*module.exports={
  getUsers:getUsers,
  getEmployee:getEmployee
}*/

module.exports={getEmployee,getUsers}



