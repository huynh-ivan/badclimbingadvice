// This is the mixed messages portfolio project
// Topic: Bad Climbing Advice

// Output to the console should be like:
// If you want to improve your {technique} technique,
// try doing {randomNumber} sets of {exercise}
// on {hold type} every {randomNumber} {setting} sessions 
// {loud noise}

getRandomNumber = () => Math.random(); // this needs to be a function so that a new random number is generated each time

getTechnique = () => { // returns random technique from array
  const allTechniques = ['crimp', 'half-crimp', 'open-hand', 'knee-bars', 'dynos', 'figure-4s', 'flags', 'backflags', 'campus', 'toe-hooks', 'heel-hooks', 'hand-foot-matches', 'mantles', 'bat-hangs', 'rock-ups', 'pinches', 'compresses', 'underclings', 'smacks', 'lock-offs'];

  return allTechniques[Math.floor(getRandomNumber() * allTechniques.length)]
}

getSetNumber = () => Math.floor(getRandomNumber() * 8); // get a number betwen 0 and 10

getExercises = () => {
  const allExercises = ['push-ups', 'sit-ups', 'v-ups', 'russian-twists', 'pull-ups', 'dead-hangs', 'muscle-ups', 'pistol squats', 'dead-lifts', 'supermans', 'windshield-wipers', 'planks']

  return allExercises[Math.floor(getRandomNumber() * allExercises.length)]
}

getHoldTypes = () => {
  const allHolds = ['jugs', 'razor-blade', 'foot-chips', 'horns', 'sloper', 'pinches',]

  return allHolds[Math.floor(Math.random() * allHolds.length)];
}

getSessionCount = () => Math.floor(getRandomNumber() * 5);

getSessionType = () => { // outdoor / gym / home-gym / urban
  const allSessionTypes = ['outdoor', 'gym', 'home-gym', 'urban'];

  return allSessionTypes[Math.floor(getRandomNumber() * allSessionTypes.length)]
}


getBadAdvice = () => {
  return `If you want to improve your ${getTechnique()}, try doing ${getSetNumber()} sets of ${getExercises()} on ${getHoldTypes()} every ${getSessionCount()} ${getSessionType()} sessions!`
}


console.log(getBadAdvice());



// I could adjust which whole numbers are returned by leveraging the length property of the array

// individual functions, would return the elements from an array

// the main function of this program would print out a message to the console, incorporating the return values 