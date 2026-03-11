'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';

const nrImages = 10;
const images = [];

for (let i = 0; i < nrImages; i++) {

    const image = {
        id: uniqueId(),
        imgSrc: `https://picsum.photos/200?random=${i}`,  // random image
        imgText: `Image number ${i}`
    };

    images.push(image);
}

const imageList = document.querySelector('#imageList');

images.forEach(img => {

    const imageItem = document.createElement("div");
    imageItem.classList.add("imgItem");

    const imageElement = document.createElement("img");
    imageElement.src = img.imgSrc;

    const p = document.createElement("p");
    p.textContent = img.imgText;

    imageItem.appendChild(imageElement);
    imageItem.appendChild(p);

    imageList.appendChild(imageItem);

});