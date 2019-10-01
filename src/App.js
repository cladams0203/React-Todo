import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: item
    }
  }

  handleAdd = (input) => {
    const newItem = {
      todo: input,
      id: Date.now(),
      complete: false
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }
  handleChange = (id) => {
    this.setState({
      list: this.state.list.map(item => {
        item.id === id ? {...item, complete: !item.complete} : item
      })
    })
  }
  handleRemove = () => {
    this.setState({
      list: this.state.list.filter(item => !item.complete)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
      </div>
    );
  }
}

export default App;
