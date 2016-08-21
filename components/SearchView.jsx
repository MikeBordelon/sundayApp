var SearchView = (props) => (
  <select onChange={props.changeFunc}>
    {props.genres.map(genre =>
      <option value={genre}>{genre}</option>
    )}
    }
  </select>
);