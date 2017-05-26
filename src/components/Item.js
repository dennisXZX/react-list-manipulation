import React, { Component } from 'react';

class Item extends Component {
	render() {
		const { id, name, timestamp, flag } = this.props;
		return (
			<div className={`row ${flag}`}>
				<div className="col-sm-4"> 
					{id}
				</div>
				<div className="col-sm-4"> 
					{name}
				</div>
				<div className="col-sm-4"> 
					{timestamp.toString()}
				</div>
			</div>
		);
	}
}

export default Item;