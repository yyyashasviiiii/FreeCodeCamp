var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) 
  {
    case 2:    // cases 2 , 3, 4, 5, 6 have same output therefore
    case 3:    // as multiple options have same output they are used together
    case 4:
    case 5:
    case 6:
      count = count + 1;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count = count - 1;
      break;
  }
  if (count > 0) 
  {
    return count + " Bet"; // space before Bet is necessary
  }
  else 
  {
    return count + " Hold"; // space before Hold is necessary
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
