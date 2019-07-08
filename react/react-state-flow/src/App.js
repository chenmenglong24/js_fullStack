import React, { Component } from 'react';
import List from './List'
import CommentInput from './CommentInput'
import CommentList from './CommentLists'
import logo from './logo.svg';
import './App.css';

let generateID = 1;
class App extends Component {
  state = {
    lists:  [
      {name: 'tom', age: 8, school: 'school1', id: 0},
      {name: 'jerry', age: 8, school: 'school2', id: 1}
    ],
    commentLists: []
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    generateID++;
    lists.push({name: 'jerry', age: 8, school: 'school2', id: generateID});
    this.setState({
      lists
    })
  }
  handleListDelete = (id) => {
    console.log('父组件收到id'+id)
    const lists = this.state.lists.slice(0);
    const index = lists.findIndex(list => list.id === id);
    lists.splice(index, 1);
    this.setState({
      lists
    })
  }
  handlePublish = (userName, commentContent) => {
    // push setState
    const commentLists = this.state.commentLists.slice(0);
    commentLists.push({userName, commentContent})
    this.setState({
      commentLists
    })
  }

  render () {
    const { lists, commentLists } = this.state

    return (
      <>
        <ul>
          <button onClick={this.handleAddInfo}>添加一条数据</button>
          {
            lists.map((list, i) => {
              return (
                <List key={list.id} 
                  list={list} 
                  a={1} 
                  b={2} 
                  onDelete={this.handleListDelete}
                  />
              )
            })
          }
        </ul>
        <div>
          <CommentInput onPublish={this.handlePublish}/>
          <CommentList commentLists={commentLists}/>
        </div>
      </>
    )
  }
}

export default App;
