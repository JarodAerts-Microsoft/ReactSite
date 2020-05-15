import React from 'react';
import './App.css';

class ShoppingList extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/api/GetList")
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
				  <h2>{shoppingItem.name} </h2>
				  <h4>Quantity: {shoppingItem.quantity}</h4>
				  <img src={shoppingItem.image} alt="" width="300" />
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
