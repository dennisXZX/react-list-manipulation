import generateData from './generateData';

/*
Data Format

id: "HJt1Z4VZW"
name: "Handcrafted Metal Shoes"
timestamp: Mon Sep 17 2007 12:35:03 GMT+1000 (AEST)
*/

export default {
	resultList: [],

	generateList: function() {
		this.resultList = generateData();
		return this.resultList;
	},
	sortListRecentToOldest: function(list) {
    return list.sort((a, b) => {
      return (a.timestamp > b.timestamp ? -1 : 1) ;
    });
	},
	sortOldistToRecent: function(list) {
		return this.sortListRecentToOldest(list).reverse();
	},
	deleteItem: function(list, id) {
		const filterList = list.filter((item) => {
			if (!(item.id === id)) {
				return true;
			} else {
				return false;
			}
		});
		return filterList;
	},
	addItem: function(list, id, name) {
		const newDate = new Date();
		list.push({
			id: id,
			name: name,
			timestamp: newDate
		});
		return list;
	}
}