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



  handleClick () {
    // console.log('clicked');
    this.setState({
      // isClicked: true
    });

    this.props.getSavedBooks();
  }
  render () {
    // console.log(this.state.value);

    return (
      <form onClick={this.handleClick.bind(this)}>
        <input className='savedBooks' value='See Saved Books'/>


       <input className='search-bar'
         type="text"
         placeholder='Search for a book!'
         value={this.state.value}
         onChange={this.handleChange.bind(this)}/>
       </form>




    );
  }
}
