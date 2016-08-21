class App extends React.Component {
  constructor (props) {
    // var ourAjax = function(...rest) {
    //   $.ajax.apply(this, rest);
    // }.bind();
    super(props);

    this.state = {
      selectedGenre: 'Action',
      selectedMovies: this.props.data.filter(function(movie) {
        return movie.genre === 'Action';
      }),
      data: this.props.data
    };
  }

  componentDidMount () {
    var that = this;
    $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'GET',
      success: function(data) {
        console.log('success', this);
        console.log('data', data);
        console.log('that', that);

        that.setState({
          data: data,
          selectedMovies: that.state.data.filter(function(movie) {
            return movie.genre === that.state.selectedGenre;
          })
        });
      },
      error: function() {}
    });
  }

  changeGenre (event) {
    console.log('changeGenre');
    this.setState({
      selectedGenre: event.target.value,
      selectedMovies: this.props.data.filter(function(movie) {
        return movie.genre === event.target.value;
      })
    });
  }

  render () {
    console.log('render');
    return (
      <div>
        <SearchView changeFunc={this.changeGenre.bind(this)} genres={this.props.genres}/>
        <ResultsView currentSelectedMovie={this.state.selectedMovies}/>
      </div>
    );
  }
}