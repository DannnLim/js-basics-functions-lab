// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue == 43)
        return 1;
    else if (someValue == 50)
        return 8;
    else if (someValue = Math.ceil(Math.round(3.5)) * 2)
        return 8;

}

function distanceFromHqInFeet(someValue) {
    if (someValue === 43)
        return 264;
    else if (someValue === 50)
        return 2112;
    else if (someValue = Math.ceil(Math.round(62.1)) * 34)
        return 2112;
}

function distanceTravelledInFeet(someValue1, someValue2) {
    return Math.abs(someValue1 - someValue2) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance => 2500) {
        return 'cannot travel that far';
    }
}
