var ResultsView = (props) => (
    <div>
      {props.books.items.map(book =>
        <ResultsViewEntry book={book}/>
      )}
    </div>
);