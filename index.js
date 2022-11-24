// Code your solution in this file!
// Calculating the distance from HQ in number of blocks
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}
// converting distance from HQ in blocks to feet
function distanceFromHqInFeet(blockNumber) {
  const calculatingFeet = distanceFromHqInBlocks(blockNumber) * 264;
  return calculatingFeet
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    return Math.abs(distanceFromHqInFeet(startingBlock) - distanceFromHqInFeet(destinationBlock));
}



function calculatesFarePrice(startingBlock, destinationBlock) {
    const feetTravled = distanceTravelledInFeet(startingBlock, destinationBlock);
    if(feetTravled <= 400) {
        return 0;
    } else if(feetTravled > 400 && feetTravled <= 2000) {
        return (feetTravled - 400) * .02;
    } else if(feetTravled > 2000 && feetTravled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(43, 44));
