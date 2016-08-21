class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedGenre: 'Action',
      selectedMovies: this.props.data.filter(function(movie) {
        return movie.genre === 'Action';
      })
    }
  }

  OnChange (event) {
    console.log('heres');
    this.setState({
      selectedGenre: event.target.value,
      selectedMovies: this.props.data.filter(function(movie) {
        return movie.genre === event.target.value;
    })
    })
  }

  render () {
    return (
      <div>
        <SearchView changeFunc={this.OnChange.bind(this)} genres={this.props.genres}/>
        <ResultsView currentSelectedMovie={this.state.selectedMovies}/>
      </div>
    )
  }
}