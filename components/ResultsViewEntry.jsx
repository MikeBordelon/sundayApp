class ResultsViewEntry extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      // title: this.props.book.volumeInfo.title,
      // author: this.props.book.volumeInfo.authors[0],
      // thumbnail: this.props.book.volumeInfo.imageLinks.thumbnail
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  // componentDidMount () {
  //   this.addBook();
  // }

  addBook (title, author, thumbnail) {
    $.ajax({
      url: '/books',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify({
        title: title,
        author: author,
        thumbnail: thumbnail
      }),
      success: function() {
        console.log('success');
      },
      error: function() {
        console.log('addBook error');
      }
    });
  }

  buttonClick (event) {
    event.preventDefault();
    this.addBook(this.props.book.volumeInfo.title, this.props.book.volumeInfo.authors[0], this.props.book.volumeInfo.imageLinks.thumbnail);
    // console.log(this.state.value);
  }


  render () {
    return (

        <div className="book-list-entry">

    <div className="media-left media-middle">
      <img className="media-object" src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="" />
    </div>
    <div className="media-body">
      <div className="book-list-entry-detail">{this.props.book.volumeInfo.title}</div>
    </div>
    <div className="media-body">
    <div className="book-list-entry-detail">{this.props.book.volumeInfo.authors[0]}</div>
    <div className="col-sm-12">
     <form onSubmit={this.buttonClick}>
       <div className="radio">
         <label>
           <input type="submit" value='Save This Book'/>
         </label>
       </div>
     </form>
     </div>
    </div>
  </div>
  );
  }
}

