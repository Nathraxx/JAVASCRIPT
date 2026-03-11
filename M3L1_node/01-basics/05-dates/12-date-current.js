'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const today = new Date();

console.log(today);
console.log(`Year: ${today.getFullYear()}`);
console.log(`Year: ${today.getYear()}`);
console.log(`Month: ${today.getMonth()}`);
console.log(`Day: ${today.getDay()}`);
console.log(`Milliseconds since Jan 1, 1970: ${today.getTime()}`);
console.log(`Date: ${today.getDate()}`);
console.log(`Full Date: ${today.toLocaleDateString()}`);
console.log(`Time To Next Year: ${today.getMonth() === 11 ? 31 - today.getDate() : 30 - today.getDate()} days, ${23 - today.getHours()} hours, ${59 - today.getMinutes()} minutes, ${59 - today.getSeconds()} seconds`);
// Do a little extra string processing to make sure minutes are padded with
// a leading 0 if needed to make a two-digit value (like '05' in the time 4:05)
const hours = today.getHours();
const minutes = today.getMinutes().toString().padStart(2, '0');
console.log(`Time ${hours}:${minutes}`);

// Remove all the time information
today.setHours(0,0,0,0);
console.log(`Same date with no time: ${today}`);

// Calculate time until next New Year's Day
function getTimeUntilNewYear() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  const newYear = new Date(nextYear, 0, 1); // January 1st of next year
  
  const timeDiff = newYear.getTime() - now.getTime();
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

console.log(`Time until next New Year's Day: ${getTimeUntilNewYear()}`);