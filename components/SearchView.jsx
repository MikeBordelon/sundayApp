class SearchView extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      value: ''
    };
  }

  handleChange (event) {
    this.props.handleSearch(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  render () {
    // console.log(this.state.value);
    return (
    <div>
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
