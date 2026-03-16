'use strict';
import {seedGenerator, uniqueId, randomNumber, randomDecimal, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js'

//test that scripts are working
console.log("Hello world");
for (let index = 0; index < 10; index++) {
    console.log(index);

}

// data generation
const nrImages = 10;
const images = [
  'img/bear.png',
  'img/elephant.png',
  'img/img1.png',
  'img/img2.png',
  'img/img3.png',
  'img/img4.png',
  'img/img5.png',
  'img/img6.png',
  'img/jupiter1.jpg',
  'img/jupiter2.jpg',
  'img/jupiter3.jpg',
  'img/jupiter4.png',
  'img/jupiter5.jpg',
  'img/parrot.png',
  'img/penguin.png',
  'img/zebra.png'
];
for (let i = 0; i < nrImages; i++) {
    const image = {
        id: uniqueId(),
        imgSrc: `https://picsum.photos/200/200?random=${randomNumber(1,1000)}`,
        imgText: `Random image ${i+1}`
    }
    
    images.push(image)
}



images.forEach((src, index) => {
  const imageItem = document.createElement("div");
  imageItem.classList.add("ImgItem");

  const img = document.createElement("img");
  img.src = src;

  const p = document.createElement("p");
  p.textContent = `Image With Text ${index + 1}`;

  imageItem.appendChild(img);
  imageItem.appendChild(p);

  imageList.appendChild(imageItem);
});