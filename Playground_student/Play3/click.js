'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors








const myPets = document.querySelector('#myPets');
console.log(myPets);

const vehicleRows = document.querySelectorAll('#myVehicles li[data-row-id]');
console.log(vehicleRows);

const vehicleLinks = document.querySelectorAll('#myFriends li[data-row-id] a');
console.log(vehicleLinks);













/*<!-- Exercises
1. Use querySelector to find the first element with id myPets
2. Use querySelectorAll() to find all li elements with an attribute data-row-id that are nested at some level within an element id myVehicles
3. Use querySelectorAll() to find all a elements that are at some level nested within an li element with an attribute data-row-id. 
   The li element should be within an element with id myVehicles
-->
*/