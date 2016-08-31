var SavedBooksView = (props) => (
    <div>
      {props.savedBooks.map(book =>
        <SavedBooksViewEntry book={book}/>
      )}
    </div>
);