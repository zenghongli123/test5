'use strict';

function double_to_one(collection) {
 var k=0;
 var arry=new Array();
 for (var i = 0; i<collection.length; i++) {
 	for (var j= 0; j<collection[i].length; j++) {
 		arry[k]=collection[i][j];
 		k++;
 	}
 }
   var n = []; 
	for(var i = 0; i < arry.length; i++) 
	{
		if (n.indexOf(arry[i]) == -1) n.push(arry[i]);
	}
	return n;
}

module.exports = double_to_one;
