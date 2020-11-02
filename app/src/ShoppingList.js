import React from 'react';
import './App.css';

class ShoppingList extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/api/PostList", {method: "post"})
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json.results,
          loading: false,
        })
      })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
    <div className="App">
      <header className="App-header">
      <h1>Shopping List</h1>
        {loading ? (
          <p>Searching for items ..... </p>
		) : 
		(
          fetchedData.map(shoppingItem => (
			<div class="row marketing">
				<div class="col">
				  <h2>{JSON.stringify(shoppingItem)} </h2>
		  		<br/><br/>
				</div>
			</div>
			)
			)
		)
		}
      </header>
    </div>
    )
  }
}

export default ShoppingList
