import React from 'react';
import {Button} from './Button'

class Wrapper extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			url: 'https://thumbs.dreamstime.com/z/cute-gray-cat-playing-human-hand-lying-sofa-gray-striped-cat-woman-s-hand-brown-background-pet-people-157720383.jpg'
		}

		this.changeUrl = this.changeUrl.bind(this);

		this.urlsArr = ['https://d6d2h4gfvy8t8.cloudfront.net/18474768-orig.jpg',
										'https://d6d2h4gfvy8t8.cloudfront.net/18557554-orig.jpg',
										'https://d6d2h4gfvy8t8.cloudfront.net/18474522-orig.jpg']
	}

	changeUrl(event){
		const id = event.target.getAttribute('data-id');
		// debugger;
		this.setState({
			url: this.urlsArr[id]
		})
	}

	render() {
		return (
	      <div>
	        <img src={this.state.url} />

		      <div>
		        <Button action={this.changeUrl} text="First image" data_id="0" />
		        <Button action={this.changeUrl} text="Second image" data_id="1" />
		        <Button action={this.changeUrl} text="Third image" data_id="2" />
		      </div>
	      </div>
		);
	}
}

export default Wrapper;

