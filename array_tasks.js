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

	findDuplicates: function (arr) {
		return arr.filter(function(x,index){
			return 	(arr.lastIndexOf(x) > arr.indexOf(x))  && 
							(index == arr.indexOf(x))
		})		
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = []
		arr.forEach(function (element){
			if(element !== valueToRemove) {
				newArray.push(element)
			}
		})
		return newArray		
	},

	findIndexesOf: function (arr, itemToFind) {
		result = []
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] === itemToFind){
				result.push(i)
			}	
		}	
		return result
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
