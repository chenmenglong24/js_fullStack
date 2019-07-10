import React, { Component } from 'react';

let generateId = 0;

class DynamicField extends Component {
  state = {  
    data: [
      { name: 'name1', age: 1, id: 0}
    ]
  }
  render() { 
    const { data } = this.state;
    return (
      <>
        {
          data.map((fieldData, i) => {
            return (
              <Field key={fieldData.id} fieldData={fieldData} onFieldValueChange={this.handleValueChange} onFieldDelete={this.handleDelete}/>
            )
          })
        }
        <br/>
        <button onClick={this.handleAdd}>添加</button>
        <br/>
        <button>提交</button>
      </>
    );
  }

  handleValueChange = (key, value, id) => {
    // react强调不可变数据
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data[index][key] = value;
    this.setState({ 
      data  
    });
  }
  handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    this.setState({ 
      data
    });
  }
  handleAdd = () => {
    let data = this.state.data.slice(0);
    generateId++;
    data.push({
      name: '', age: 0, id: generateId
    })
    // push 返回一个数组的长度
    this.setState({ 
      data
    });
  }
}

class Field extends Component {
  state = {  }
  render() { 
    const { fieldData } = this.props;
    const { name, age } = fieldData;
    return (  
      <div>
        姓名: <input type="text" value={name} data-id={fieldData.id} onChange={this.handleFieldChangeName}/>
        年龄: <input type="number" value={age} data-id={fieldData.id} onChange={this.handleFieldChangeAge}/>
        <button data-id={fieldData.id} onClick={this.handleDelete}>删除</button>
      </div>
    );
  }

  handleFieldChangeName = (e) => {
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChange } = this.props;
    onFieldValueChange('name', name, id);
  } 
  handleFieldChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChange } = this.props;
    onFieldValueChange('age', age, id);
  }
  handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFieldDelete } = this.props;
    onFieldDelete(id);
  }
}
 
export default DynamicField;
