// Calculating Values with Map
// Using map, create a new array
// that contains the distance / time value from each trip.
// In other words, the new array should contain
// the (distance / time) value. Assign the result to the
// varaible 'speeds'.
let trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

let speeds = trips.map((trip) => {
  return trip.distance / trip.time;
});

console.log(speeds);
