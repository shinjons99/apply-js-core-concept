// function isLeapYear(year){
//     const reminder = year%4;
//     if(reminder ===0){
//         return true;
//         // console.log('Your year is leap year', year);
//     }
//     else{
//         return false;
//         // console.log('your year is not a leap year', year);
//     }

// }
// const isMyYearLeapYear = isLeapYear(1993);
// console.log('My year is', isMyYearLeapYear);

// const isHerYearLeapYear = isLeapYear(2000);
// console.log('Her year is ', isHerYearLeapYear);

// function isLeapYear(year){
//     const reminder = year % 4;
//     if(reminder ===0){
//         return true;
        
//     }
//         return false;
// }

function checkLeapYear(year){
    //three condition to find out the leap year
    if ((0 == year % 4) && (0 != year % 100)|| (0 == year % 400)){
        console.log(year + 'is a leap year');
    }
    else {
        console.log(year + 'is not a leap year');
    }
}

const year = prompt('Enter a year:');
checkLeapYear(year);