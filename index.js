// Write your code in this file!
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!'; // free ride for under 400
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks."; // under 2500 cost $30
  } else {
    return "No can do."; // over 2500 = no ride
  }
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; // 
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}