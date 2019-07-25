import React, { Component } from 'react';

class Index extends Component {
  state = {  
    count: 0
  }
  handleCountAdd = () => {
    let { count } = this.state;
    count++;
    this.setState({ 
      count  
    });
  }
  // 挂载
  componentWillMount () {
    console.log('componentWillMount');
  }
  componentDidMount () {
    console.log('componentDidMount');
  }
  componentWillReceiveProps (prveProps, nextProps) {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate () {
    console.log('componentWillUpdate');
  }
  componentDidUpdate () {
    console.log('componentDidUpdate');
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate  true');
    return true
  }
  render() { 
    console.log('render');
    const { parentCount } = this.props;
    return (
      <div>
        <button onClick={this.handleCountAdd}>handleCountAdd</button>
      </div>
    );
  }
}
 
export default Index;