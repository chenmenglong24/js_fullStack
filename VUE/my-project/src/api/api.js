import Axios from 'axios';

// function getData () {
//   var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
//   Axios.get(dataSource).then((response) => {
//     // console.log(response);
//     data = response.data.data;
//   }).catch((error) => {
//     console.log(error);
//   })
//   return data
// }

function getData () {
  return new Promise((resolve, reject) => {
    var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
    Axios.get(dataSource)
    .then((response) => {
        resolve(response.data.data);
      }, err => {
        reject(err)
      })
    .catch((error) => {
      reject(error);
    })
  })
}

var data = getData();

export default data;