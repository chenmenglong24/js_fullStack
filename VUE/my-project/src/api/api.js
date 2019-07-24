import Axios from 'axios';

// let data  = []
// function getData () {
//   let data = []
//   var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
//   Axios.get(dataSource).then((response) => {
//     // console.log(response);
//     data.push(response.data.data);
//   }).catch((error) => {
//     console.log(error);
//   })
// }

let data = []
function getData () {
  return new Promise((resolve, reject) => {
    var dataSource = 'https://www.easy-mock.com/mock/5ca45824c4e9a575b66b62c9/example/qingtingyingyu';
    Axios.get(dataSource)
    .then((response) => {
        resolve(response.data.data);
        data.push(...response.data.data)
      }, err => {
        reject(err)
      })
    .catch((error) => {
      reject(error);
    })
  })
}
getData();
// console.log(data)
export default data;