// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street - 42);

}

function distanceFromHqInFeet(street){
  let distanceInFeet = distanceFromHqInBlocks(street) * 264

  return distanceInFeet;
}

function distanceTravelledInFeet(val1, val2){
  let distance = Math.abs(val2 - val1)
  let distanceInFeet = distance * 264
  return distanceInFeet
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  let costOfFare;
  console.log(distance)
  switch (true) {
    // console.log('what')
    case (distance <= 400):
      return costOfFare = 0;
      break;
    case (distance > 400 && distance <= 2000):
      return costOfFare = (distance - 400) * 0.02;
      break;
    case (distance > 2000 && distance <= 2500):
      return costOfFare = 25;
      break;
    default:
      return 'cannot travel that far';
      break;

  }
}
