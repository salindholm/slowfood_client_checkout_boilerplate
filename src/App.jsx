import React, {Component} from 'react';
import DisplayProductData from './components/DisplayProductData';
import Login from './components/Login'
import axios from 'axios'

class App extends Component {

	state = {
		authenticated: false,
		message: null,
		orderItemsCount: null
	}

	toggleAuthenticatedState() {
		this.setState({authenticated: !this.state.authenticated})
	}

	async addToOrder(event) {
		let productID = parseInt(event.target.dataset.product)
		let headers = JSON.parse(localStorage.getItem('credentials'))
		let response = await axios.post(
			'http://localhost:3000/orders',
			{ product_id: productID },
			{ headers: headers }
			)
			this.setState({message: response.data.message })
			let count = response.data.order.items.length
			this.setState({ orderItemsCount: count })
	}

	render() {
		return (
			<>
				<Login toggleAuthenticatedState={() => this.toggleAuthenticatedState()}/>
				<h1>Slowfood</h1>
				{ this.state.message && <h2 data-cy="message">{this.state.message}</h2>}
				{ this.state.orderItemsCount && <h3 data-cy="order-items-count">You have {this.state.orderItemsCount} item in your order</h3>}
				<DisplayProductData addToOrder={(event) => this.addToOrder(event)}/>
			</>
		)
	}
}

export default App;
