import React, { Component } from 'react';

class Controls extends Component {
	handleDeleteItem = () => {
		const deleteId = this.refs.deleteId.value;
		this.props.deleteItem(deleteId);
	}

	handleAddItem = () => {
		const newId = this.refs.newId.value;
		const newName = this.refs.newName.value;
		this.props.addItem(newId, newName);
		this.refs.newId.value = "";
		this.refs.newName.value = "";
	}	

	render() {
		const { 
			sortRecentToOldist, 
			sortOldistToRecent,
			resetList
		} = this.props;

		return (
		<div className="row controls">
			<div className="col-sm-12"> 
				<hr />
				<button className="btn-primary" onClick={sortRecentToOldist}>Sort (most recent to oldest)</button>
				<button className="btn-primary" onClick={sortOldistToRecent}>Sort (most oldest to recent)</button>
				<button className="btn-primary" onClick={resetList}>Reset List</button>
				<input type="text" ref="deleteId" placeholder="Enter an id" />
				<button className="btn-primary" onClick={this.handleDeleteItem}>Delete an Item</button>
				<hr />
				<input type="text" ref="newId" placeholder="Enter an id" />
				<input type="text" ref="newName" placeholder="Enter a name" />
				<button className="btn-primary" onClick={this.handleAddItem}>Add an Item</button>				
			</div>
		</div>
		);
	}
}

export default Controls;