import './App.css';
import React from 'react';
import Control from './components/Control';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import items from './data/task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      isShowForm: false,
      strSearch: ''
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  handleCloseForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    });
  }

  handleAddTask(item) {
    console.log(item);
    if (!item.name) {
      alert('Required task name!')
      return;
    }
    let items = this.state.items;
    items.push(item);
    this.setState({ 
      items: items,
      isShowForm: false
    });
  }

  filter(items, search) {
    let result = [];
    search = search.toLocaleLowerCase();
    items.forEach((item) => {
      if (item.name.toLocaleLowerCase().indexOf(search) !== -1) {
        result.push(item);
      }
    });
    return result;
  }

  render() {
    let items = this.state.items;
    let isShowForm = this.state.isShowForm;
    let search = this.state.strSearch;
    if (search.length > 0) {
      items = this.filter(items, search);
    }
    return (
      <div className="App">
        <div className="container">
          <Title />
          <Control
            onClickSearch={this.handleSearch}
            onClickAdd={this.handleToggleForm}
            isShowForm={isShowForm}
          />
          {isShowForm ? <Form onClickCancel={this.handleCloseForm} onSubmitAddTask={this.handleAddTask} /> : ''}
          <List items={items} />
        </div>
      </div>
    );
  }
}

export default App;
