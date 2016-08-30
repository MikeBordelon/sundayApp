class SearchView extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      value: '',
      isClicked: false
    };
  }

  handleChange (event) {
    this.props.handleSearch(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  getBooks () {
    $.ajax({
      url: '/books',
      type: 'GET',
      success: function(data) {
        // render stuff
        console.log(data);
      },
      error: function() {
        console.log('error in get');
      }
    });
  }

  handleClick () {
    // console.log('clicked');
    this.setState({
      isClicked: true
    });

    this.getBooks();
  }
  render () {
    // console.log(this.state.value);

    return (
      <div>
        <div onClick={this.handleClick.bind(this)} className='savedBooks'>See Saved Books</div>
    <div>
    </div>
       <input className='search-bar'
         type="text"
         placeholder='Search for a book!'
         value={this.state.value}
         onChange={this.handleChange.bind(this)}
       />
     </div>
    );
  }
}
