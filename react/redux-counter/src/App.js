import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class Count extends React.Component {
  state = {  }
  render() { 
    console.log(this.props);
    const { count, films } = this.props
    return (  
      <div>
        count: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          films.map((film, i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
  handleIn = () => {
    // store.dispatch({type: 'INCREMENT'})
    this.props.incerment();
  }
  handleDe = () => {
    // store.dispatch({type: 'DECREMENT'})
    this.props.decrement();
  }
  handleAddFilm = () => {
  //   store.dispatch({
  //     type: 'ADD_FILM', 
  //     film: {name: '黑暗骑士'}
  //   })
  this.props.addFilm();
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    films: state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {console.log('foo')},
    incerment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) },
    addFilm: () => { dispatch({ type: 'ADD_FILM', film: {name: "黑暗骑士"} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
