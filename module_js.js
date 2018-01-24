// Type Stats (1)

var arr = ['1', 0, Math.random, alert, prompt, prompt, null, undefined, "name", {}];
function typeStats(arr) {
	var obj = {} 
	arr.map(element => {
    	if (! obj[typeof element]) {
       		obj[typeof element] = 1
    		}
    		else obj[typeof element]++;
  		})
  	return obj
}
typeStats(arr);

=========

var arr = ['1', 0, Math.random, alert, prompt, prompt, null, undefined, "name", {}];
function typeStats(array) {
  var obj = new Object();
  for(i in array){
    if (! obj[typeof array[i]]){
      obj[typeof array[i]] = 1;
    }
    else {
      obj[typeof array[i]] ++;
    }
  }
  return obj;
}
typeStats(arr);

for (i in arr){
  debugger;
  console.log(typeof arr[i]);
}



// Intersect (2)

function intersect(arr1, arr2) {
  var initial = []
  arr1.forEach(el1 => {
    if (arr2.some(el2 => el2 == el1 ))
      initial.push(el1);
  })
  return initial;
}

var a = [1,2,3,4]
var b = [3,4,5,6]
intersect(a,b);

==================

function intersect(a, b) {
  var arr = [];
  a.forEach(function(el1){
    if (b.some(function(el2){
      return el2 == el1;
    })){arr.push(el1);}
  });
  return arr;
}
var a = [1,2,3,4]
var b = [3,4,5,6]
intersect(a,b);




// oddEvenClass (3)

function oddEvenClass(element, class1, class2) {
	var step = false;
	for (var child of element.children) {
    	step ? child.className = class1 : child.className = class2;
    	step = !step;
	}
}
var table = document.querySelector('#table tbody')
oddEvenClass(table, 'dark', 'light')

// UpScroll (4)

function upScroll(elem) {
  var _isUp = false;
  var _tmpEl;
   document.addEventListener('click', (event) => {
       if (event.target == elem) {
         window.scrollTo(0,0);
         _tmpEl = elem;
         return;
    }
    try{
       _tmpEl.scrollIntoView(false);
       _tmpEl = null
         } catch(e) {}
  })
} 

var btn = document.getElementById('btn');
upScroll(btn)

// Tabs (5)
// 
