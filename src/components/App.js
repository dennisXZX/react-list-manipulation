/*
- Use React + ES6
- Generate data using the function generatesData.js
  - 400 items
  - Earliest timestamp of 15th January 2017
  - Latest timestamp of 26th January 2017
- Display data in a list format
- Basic styling
- Sorted list from most recent to oldest
- Provide a button that replaces existing data with a new 400 items
- Visually group list items and label groups by day, i.e. 17th January 2017
- Provide a button that allows the user to remove a specific item from the list
- Provide a button that allows the user to add single generated item to the list
*/

import React, { Component } from 'react';
import ListAPI from '../api/ListAPI';
import ItemList from './ItemList';
import Controls from './Controls';

class App extends Component {
  state = {
    list: []
  }

  sortRecentToOldist = () => {
    const sortedList = ListAPI.sortListRecentToOldest(this.state.list);
    this.setState({list: sortedList});
  }

  sortOldistToRecent = () => {
    const sortedList = ListAPI.sortOldistToRecent(this.state.list);
    this.setState({list: sortedList});
  }

  resetList = () => {
    const newList = ListAPI.generateList(this.state.list);
    this.setState({list: newList});
  }

  deleteItem = (id) => {
    const newList = ListAPI.deleteItem(this.state.list, id);
    this.setState({list: newList});
  }

  addItem = (id, name) => {
    const newList = ListAPI.addItem(this.state.list, id, name);
    this.setState({list: newList});
  }

  componentDidMount() {
    this.setState({list: ListAPI.generateList()});
  }

  render() {
    const { list } = this.state;

    return (
      <div className="container">
        <Controls sortRecentToOldist={this.sortRecentToOldist}
                  sortOldistToRecent={this.sortOldistToRecent}
                  resetList={this.resetList}
                  deleteItem={this.deleteItem}
                  addItem={this.addItem} />
        <ItemList list={list} />
      </div>
    );
  }
}

export default App;
