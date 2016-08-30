var ResultsViewEntry = (props) => (
  <div className="book-list-entry">
  {console.log(props.book.volumeInfo)}
    <div className="media-left media-middle">
      <img className="media-object" src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
    </div>
    <div className="media-body">
      <div className="book-list-entry-detail">{props.book.volumeInfo.title}</div>
    </div>
     <div className="media-body">
      <div className="book-list-entry-detail">{props.book.volumeInfo.authors[0]}</div>
    </div>
  </div>
);

