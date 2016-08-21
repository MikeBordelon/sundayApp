var SearchView = ({changeFunc, genres}) => (
  <select onChange={changeFunc}>
    {genres.map(genre =>
      <option value={genre}>{genre}</option>
    )}
    }
  </select>
);