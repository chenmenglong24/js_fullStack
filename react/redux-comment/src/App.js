import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import App from './component/App';

// class App extends React.Component {
//   componentDidMount () {
//     const { addComment } = this.props;
//     setTimeout(() => {
//       addComment('usName1', 'content1')
//       addComment('usName2', 'content2')
//     }, 2000);
//   }
//   render () {
//     const { commentList } = this.props;
//     return (
//       <div>
//         { commentList.length === 0 ? '暂无评论哦~': <ul>
//           {
//             commentList.map((comment, i) => {
//               return <li>
//                 userName: {comment.userName}
//                 content: {comment.content}
//               </li>
//             })
//           }
//         </ul> }
//       </div>
//     )
//   }
// }

// mapStateToProps
const a = (state) => {
  return {
    // 过滤一下
    commentList: state
  }
}
// mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}

export default connect(a, b)(App);
