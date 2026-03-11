'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';

console.log("Hello world");
for (let index = 0; index < 10; index++) {
    console.log(index);
}

const imageList = document.querySelector('#imageList');

const imageItem = document.createElement("div");
imageItem.classList.add("imgItem");


const p = document.createElement("p");
imageItem.appendChild(p);
imageList.appendChild(imageItem);
