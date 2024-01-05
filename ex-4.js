const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  return todos.filter(getValidatedKey);
}

function getValidatedKey(array) {
  return array.completed === true;
  
  /*let prototype = [];

  for (let i = 0; i < array.length; i++) {
  if (array[i].completed === true) {
    return prototype.push(array[i]);
    }
  }*/
}

let validatedArray = getCompletedTodo(todos);


console.log(validatedArray);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
