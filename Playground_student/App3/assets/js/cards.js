        'use strict'

        //import { deckOfCards } from "./deck-of-cards";


        const [Hearts, Clubs, Spades, Diamonds] = [-200, -135, -150, - 170];
        const [cardRow, cardCol, cardTopOffset] = [7,6, -200];
        const spriteTop =  cardTopOffset - cardRow*110 - cardRow*228;
        const spriteLeft = -165 - cardCol*110 - cardCol*162;


        const aceOfDiamonds = {cardRow:5 ,cardCol:5 , cardTopOffset:-170}
        const tenOfSpades = {cardRow:3 , cardCol:1, cardTopOffset:-150}
        const threeOfHearts = {cardRow: 6, cardCol:1, cardTopOffset:-200}
        const jackOfClubs = {cardRow:1, cardCol:2, cardTopOffset:-135}
        const kingOfSpades = {cardRow:3, cardCol:4, cardTopOffset:-150} 
        const aceOfSpades = {cardRow:3 , cardCol:5, cardTopOffset:-150 }     

          const card = document.querySelectorAll(".PlayingCard");


         card[0].setAttribute(
          'style', `background-position: top ${aceOfDiamonds.cardTopOffset - aceOfDiamonds.cardRow*110 - aceOfDiamonds.cardRow*228}px left ${-165 - aceOfDiamonds.cardCol*110 - aceOfDiamonds.cardCol*162}px;`
        )
        card [1].setAttribute(
          'style', `background-position: top ${tenOfSpades.cardTopOffset - tenOfSpades.cardRow*110 - tenOfSpades.cardRow*228}px left ${-165 - tenOfSpades.cardCol*110 - tenOfSpades.cardCol*162}px;`
        )
        card[2].setAttribute(
          'style', `background-position: top ${threeOfHearts.cardTopOffset - threeOfHearts.cardRow*110 - threeOfHearts.cardRow*228}px left ${-165 - threeOfHearts.cardCol*110 - threeOfHearts.cardCol*162}px;`
        )
        card[3].setAttribute(
          'style', `background-position: top ${jackOfClubs.cardTopOffset - jackOfClubs.cardRow*110 - jackOfClubs.cardRow*228}px left ${-165 - jackOfClubs.cardCol*110 - jackOfClubs.cardCol*162}px;`
        )
        card[4].setAttribute(
          'style', `background-position: top ${kingOfSpades.cardTopOffset - kingOfSpades.cardRow*110 - kingOfSpades.cardRow*228}px left ${-165 - kingOfSpades.cardCol*110 - kingOfSpades.cardCol*162}px;`
        )
        card[5].setAttribute(
          'style', `background-position: top ${aceOfSpades.cardTopOffset - aceOfSpades.cardRow*110 - aceOfSpades.cardRow*228}px left ${-165 - aceOfSpades.cardCol*110 - aceOfSpades.cardCol*162}px;`
        )
 //export {deckOfCards}