var ResultsView = (props) => (

  <div>
    {props.currentSelectedMovie.map(movie =>
      <ResultsViewEntry movie={movie}/>
    )}
  </div>
);