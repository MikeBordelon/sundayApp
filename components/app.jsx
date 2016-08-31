class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      bookResults: {items: []},
      savedBooks: []
    };
  }

  componentDidMount () {
    this.getBooks();
  }

  getBooks (query) {
    this.searchBooks(query, (books) =>
      this.setState({
        bookResults: books
      })
    );
  }

  searchBooks (query, callback) {
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?',
      type: 'GET',
      key: 'AIzaSyBJ2hhIKxZDBPB-Rp2gVoJledImHlfKojE',
      data: {q: query},
      success: function(data) {
      // console.log(data)
        callback(data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }


  getSavedBooks () {
    $.ajax({
      url: '/books',
      type: 'GET',
      success: function(data) {
        console.log('got books');
        this.setState({
          savedBooks: data
        });
      }.bind(this),
      error: function() {
        console.log('error in get');
      }
    });
  }

  render () {
    console.log(this.state.savedBooks);
    return (
      <div >
      <h1 className='h1'>Search Google Books!</h1>
        <SearchView getSavedBooks = {this.getSavedBooks.bind(this)}
                    handleSearch={this.getBooks.bind(this)}/>
        <ResultsView books={this.state.bookResults}/>
        <SavedBooksView savedBooks={this.state.savedBooks}/>
      </div>
    );
  }

}