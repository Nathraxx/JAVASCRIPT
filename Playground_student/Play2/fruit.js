'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const fruitProto ={
    type: 'fruit',
    color: 'unknown',


}   

const apple = Object.create(fruitProto);

const orange = Object.create(fruitProto);

const pear = Object.create(fruitProto);



apple.type = 'apple';
apple.color = 'red';

orange.type = 'citrus';
orange.color = 'orange';

console.log(apple);
console.log(orange);

console.log(apple.type);
console.log(orange.type);

console.log(pear);
console.log(pear.type);


delete apple.type;
console.log(apple);
console.log(apple.type);

fruitProto.type = 'unknown fruit';

console.log(apple);
console.log(apple.type);
console.log(orange);
console.log(orange.type);
console.log(pear);
console.log(pear.type);