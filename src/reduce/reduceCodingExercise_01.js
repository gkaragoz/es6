// Distance Traveled
// Use the 'reduce' helper to find the sum of all the
// distances traveled. Assign the result to the variable
// 'totalDistance'

let trips = [
	{ id: 0, distance: 34 },
	{ id: 1, distance: 12 },
	{ id: 2, distance: 1 },
];

let totalDistance = trips.reduce((previous, trip) => {
	return previous + trip.distance;
}, 0);

console.log(totalDistance);
