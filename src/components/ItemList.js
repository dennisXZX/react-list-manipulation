import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
	state = {
		displayedList: []
	}

	// when a new prop is passed from App component
	// this method will be triggered to update the displayedList
	componentWillReceiveProps(nextProps) {
		this.setState({
			displayedList: nextProps.refilter()
		});
	}

	_generateList = (list) => {
		return (
			list.map((item) => {
				const date = item.timestamp.getDate();
				if (date % 2 === 0) {
					return (
						<Item flag="evenDate" key={item.id} {...item} />
					)
				} else {
					return (
						<Item flag="oddDate" key={item.id} {...item} />
					)
				}
			})
		)
	}

	render() {
		return (
			<div>
				<div className="row">
					<h2 className="col-sm-12 list-title">SAMPLE LIST</h2>
				</div>
				<hr />
				<div className="row">
					<div className="col-sm-4 list-captain">ID</div>
					<div className="col-sm-4 list-captain">NAME</div>
					<div className="col-sm-4 list-captain">TIMESTAMP</div>
				</div>
				{this._generateList(this.state.displayedList)}
			</div>
		);
	}
}

export default ItemList;
