// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street-42);
}

function distanceFromHqInFeet(street){
    return Math.abs(street-42) * 264 ;
}

function distanceTravelledInFeet(street1, street2){
    return Math.abs(street1-street2) * 264
}

function calculatesFarePrice(street1, street2){
    let distance=Math.abs(street1-street2) * 264;
    if(distance<400)
        return 0;
    else if (distance>=400 && distance<=2000){
        return (distance-400) * .02;
    }
    else if (distance< 2500){
        return 25;
    }
    else 
        return 'cannot travel that far';
}