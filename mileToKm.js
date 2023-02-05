function milesToKilometer(miles){
    const kilometer = miles * 1.690;
    return kilometer;
}

const myMiles = 2;
const myKilometer = milesToKilometer(myMiles);
console.log("My office distance in KM:", myKilometer);