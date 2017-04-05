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
		console.log( newArray)
		return newArray		
	},


	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

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
