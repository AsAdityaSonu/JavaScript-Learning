// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.
// ----------------------------------------------------------------------------------------

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case (1):
      return "Low";
      break;
    case (2):
      return "Low";
      break;
    case (3):
      return "Low";
      break;
    
    case (4):
      return "Mid";
      break;
    case (5):
      return "Mid";
      break;
    case (6):
      return "Mid";
      break;
    

    case (7):
      return "High";
      break;
    case (8):
      return "High";
      break;
    case (9):
      return "High";
      break;
    
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);