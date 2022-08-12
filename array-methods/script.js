// to check if an array method mutates the array
// check: https://doesitmutate.xyz/ 

console.log('array methods 🙂')
// map -> changes every element in the array
// the length of the array remains the same

const numbers = [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

// function callback(number) {
// 	return number * 2
// }

const doubled = numbers.map(function (number) {
	return number * 2
})
console.log(doubled)

function myMap(arr, callback) {
	const result = []
	for (let el of arr) {
		const changedNum = callback(el)
		console.log(changedNum)
		result.push(changedNum)
	}
	return result
}

// const doubled = myMap([1, 2, 3], function (number) {
// 	return number * 3
// })
// console.log(doubled)

console.clear()

const beatles = ['john', 'paul', 'george', 'ringo']

// ['mr john', 'mr paul']
const prefixed = beatles.map(function (person) {
	return 'mr ' + person
})
// console.log(prefixed)

// const numbers = [1, 2, 3, 4, 5]

// create a new array using map with every number + 2
const plus2 = numbers.map(function (number) {
	return number + 2
})

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72
	}
];
// 1. change the array of objects to an array containing only names
// ['Tony Parker', ...]

const names = students.map(function (student) {
	return student.name
})
// console.log(names)
// 2. map over students and change the array to
// [{name: <name of the student>, total: <sum of the projects>}]
// [{name: 'Tony Bancini', total: 123}]
const totals = students.map(function (student) {
	return {
		name: student.name,
		total: student.firstProject + student.secondProject
	}
})

// console.log(totals)


// reduce -> it reduces the array to one value

const numbers2 = [2, 5, 7, 9]

const sum = numbers2.reduce(function (acc, val) {
	console.log('acc is :', acc)
	// console.log('val is :', val)
	return acc + val
}, 0)
console.log(sum)

const words = ['foo', 'bar', 'baz']

const lengths = words.reduce(function (acc, val) {
	return acc + val.length
}, 0)
console.log(lengths)
const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];

// using reduce sum up all the ages of the people

const ages = people.reduce(function (acc, val) {
	return acc + val.age
}, 0)
console.log(ages)

console.clear()
const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	company: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really useful, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broke really fast",
				rate: 2
			},
		]
}
// console.log(product.reviews)
const rates = product.reviews.reduce(function (acc, val) {
	return acc + val.rate
}, 0)
// console.log(rates)

// filter -> filters the array based on conditions that 
// are provided in a callback and returns a new array

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter out the even numbers
const evens = numbers3.filter(function (number) {
	// if (number % 2 === 0) {
	// 	return true
	// } 
	// return false
	// or shorter: 
	return number % 2 === 0
})
console.log(evens)
const largerThanThree = numbers3.filter(function (number) {
	if (number > 3) {
		return true
	}
	return false
})
console.log(largerThanThree)

console.clear()

const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];

// 1. filter out all the places with a price > 300

const above300 = places.filter(function (place) {
	return place.price > 300
})
// console.log(above300)

// 2. write a function getTitlesOfPlacesWithPool
// that gets an array and returns an array containing 
// only the titles of the places that have a pool

function getTitlesOfPlacesWithPool(arr) {
	// filter out the places with pool
	const pools = arr.filter(function (place) {
		// if (place.pool === true) {
		// 	return true
		// }
		// return false
		return place.pool
	})
	// map over the result to only get the titles
	const titles = pools.map(function (place) {
		return place.title
	})
	return titles
}
const withPool = getTitlesOfPlacesWithPool(places)
// console.log(withPool)

// kata from codewars using filter
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
function gooseFilter(birds) {
	const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	const filtered = birds.filter(function (bird) {
		// if the bird is not contained in 'geese' -> return true
		if (geese.indexOf(bird) === - 1) {
			return true
		}
		return false
		// return !geese.includes(bird)
	})
	return filtered
};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"])


// reverse() -> reverses an array

const str = 'boba fett'

// turn a string to an array
// using split()

const arr = str.split('')
console.log(arr)
arr.reverse()
console.log(arr)
// turn an array to a string
// join()
const res = arr.join('#')
console.log(res)
// nice trick to get the number of occurences
// of a character in a string
// .split(<the character>).length - 1
// 'ereuewe'.split('e').length - 1


// sort -> sorts an array 'in place' -> the array 
// itself is mutated

const nums4 = [23, 7, 12, 45]

// nums4.sort()


nums4.sort(function (a, b) {
	console.log(a, b)
	// if (b < a) {
	// 	return - 5
	// }
	// if (a < b) {
	// 	return 23
	// }
	// if (a === b) {
	// 	return 0
	// }
	// this sorts descending
	// return b - a
	// this sorts ascending
	return a - b
})

console.log(nums4)


const reviews = [
	{
		name: 'foo',
		rate: 9,
		score: 7
	},
	{
		name: 'bar',
		rate: 9,
		score: 5
	},
	{
		name: 'baz',
		rate: 5,
		score: 4
	}
]

// 1. sort the reviews ascending by their rates
reviews.sort(function (a, b) {
	if (a.rate === b.rate) {
		return a.score - b.score
	}
	return a.rate - b.rate
})
console.log(reviews)
// 2. add a secondary sort criterion if two rates
// are the same we want to sort by the score

// forEach()
const array = [3, 6, 9]
// you cannot return from forEach() for that you need
// a for loop


array.forEach(function (el, i, arr) {
	console.log(i)
	console.log(el)
	console.log(arr)
})