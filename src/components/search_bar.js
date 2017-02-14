import React from 'react'

// const SearchBar = () => {
//   return <input/>
// }

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }
  }
  
  render () {
    return (
      <div className="col-sm-12 search-bar">
        <input className="form-control"
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}/>
        {/*<input onChange={event => this.setState({ term: event.target.value })}/>*/}
      </div>
    )
  }

  onInputChange (term) {
    this.setState({term})
    this.props.onSearchChange(term)
  }
}

export default SearchBar