var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = []
		newArray = arr1
		arr2.forEach(function(element){
			arr1.push(element)
		})
		return newArray
	},

	insertAt: function (arr, itemToAdd, index) {
		var newArray = []
		for (var i = 0; i < index; i++) {
			newArray.push(arr[i])
		}
		newArray.push(itemToAdd)
		for (var i = index; i < arr.length ; i++){
			newArray.push(arr[i])
		}
		return newArray		
	},


	square: function (arr) {
		return arr.map( function(x) {
			return x * x
		})		
	},

	sum: function (arr) {
		return arr.reduce(function(acc, cur, index){
			return acc + cur
		}, 0)		
	},

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
