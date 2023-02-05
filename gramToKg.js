function gramTokilogram(gram){
    const kilogram = gram * 0.001;
    return kilogram;
}

const myGram = 78000;
const myKilogram = gramTokilogram(myGram);
console.log('My weight in kiloGram:', myKilogram);