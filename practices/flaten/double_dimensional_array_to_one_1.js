'use strict';

function double_to_one(collection) {
var k=1;
var i,j;
 var arry=new Array();
 arry[0]=collection[0];
 for (i = 1; i<collection.length; i++) {
 	for (j= 0; j<collection[i].length; j++) {
 		arry[k]=collection[i][j];
 		k++;
 	}
 }
 return arry;
}
module.exports = double_to_one;
