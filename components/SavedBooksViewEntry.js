class SavedBooksViewEntry extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      // title: this.props.book.volumeInfo.title,
      // author: this.props.book.volumeInfo.authors[0],
      // thumbnail: this.props.book.volumeInfo.imageLinks.thumbnail
    };
    // this.buttonClick = this.buttonClick.bind(this);
  }


  render () {
    return (

    <div className="book-list-entry2">

    <div className="media-left media-middle">
      <img className="media-object" src={this.props.book.thumbnail} alt="" />
    </div>
    <div className="media-body">
      <div className="book-list-entry-detail">{this.props.book.title}</div>
    </div>
    <div className="media-body">
    <div className="book-list-entry-detail">{this.props.book.author}</div>
    <div className="col-sm-12">

     </div>
    </div>
  </div>
  );
  }
}

