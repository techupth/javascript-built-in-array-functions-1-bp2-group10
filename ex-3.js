const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  return todos.map(searchTopic);
}

function searchTopic(array) {
	return array.topic;
}

let gottenTopic = getTodoTopics(todos)

console.log(gottenTopic);

/* Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/



  
