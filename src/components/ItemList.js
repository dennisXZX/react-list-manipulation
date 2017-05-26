import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {

	_generateList = (list) => {
		return (			
			list.map((item) => {
				// console.log(new Date(item.timestamp).getDay());
				const date = item.timestamp.getDate();
				if (date % 2 === 0) {
					return (
						<Item flag="evenItem" key={item.id} {...item} />
					)
				} else {
					return (
						<Item flag="oddItem" key={item.id} {...item} />
					)
				}
			})
		)
	}

	render() {
		const { list } = this.props;

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
				{this._generateList(list)}		
			</div>
		);
	}
}

export default ItemList;