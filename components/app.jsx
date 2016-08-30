// import radioButton from 'radioButton';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      bookResults: {items: []},
    };
  }

  componentDidMount () {
    this.getBooks();
  }

  getBooks (query) {
    // console.log(query)
    // console.log(this.props.searchOmdb);
    this.props.searchBooks(query, (books) =>
      this.setState({
        bookResults: books
      })
    );
  }

  render () {
    return (
      <div >
      <h1 className='h1'>Search Google Books!</h1>
        <SearchView handleSearch={this.getBooks.bind(this)}/>
        <ResultsView books={this.state.bookResults}/>
      </div>
    );
  }

}