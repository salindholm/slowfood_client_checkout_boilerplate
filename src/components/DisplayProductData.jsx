import React, { Component } from 'react';
import { getData } from '../modules/productData';

class DisplayProductData extends Component {
	state = {
		productData: []
	}

	componentDidMount() {
		this.getProductData()
	}

	async getProductData() {
		let result = await getData();
		this.setState({ productData: result.data.products })
	}

	// async addToOrder(event) {
	// 	let productID = parseInt(event.target.dataset.product)
	// 	let headers = JSON.parse(localStorage.getItem('credentials'))
	// 	let response = await axios.post(
	// 		'http://localhost:3000/orders',
	// 		{ product_id: productID },
	// 		{ headers: header }
	// 		)
		
	// }

	render() {
		let dataIndex
		if (Array.isArray(this.state.productData) && this.state.productData.length) {
			dataIndex = (
				<div id="index">
					{this.state.productData.map(item => {
						return (
							<div key={item.id} data-cy={`product-${item.id}`}>
								{item.name}{item.description}{item.price}
								{ localStorage.getItem('authenticated') === 'true' &&
									<button
									data-product={item.id}
										onClick={(event)=> this.props.addToOrder(event)}
									>
										Add to Order
									</button>
								}
							</div>
						)
					})}
				</div>
			)
		}

		return (
			<div>
				{dataIndex}
			</div>
		)
	}
}

export default DisplayProductData;