import React, { Component } from 'react';
import Form from './Form/Form';
import List from './List/List';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showList: false
    };
  }

  setShowList(show) {
    this.setState({
      showList: show
    });
  }

  addBooks(books) {
    console.log("books: "+books);
    this.setState({
      books,
      showList: true
    });
    console.log("state: "+this.state.books);
  }

  render(){
    const page = this.state.showList
          ? <List books={this.state.books}/>
          : <fieldset></fieldset>;
    return (
      <main className='App'>
        <header>
          <h1>Google Booksearch</h1>
        </header>
        <Form  handleSearch={books => this.addBooks(books)}/>
        {page}
        {/* <List /> */}
      </main>
    );
  }

}

export default App;