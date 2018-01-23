// Type Stats (1)

var arr = ['1', 0, Math.random, alert, prompt, prompt, null, undefined, "name", {}];
function typeStats(arr) {
	initial = {}
	arr.map(element => {
    	if (! initial[typeof element]) {
       		initial[typeof element] = 1
    		}
    		else initial[typeof element]++;
  		})
  	return initial
}
typeStats(arr);

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

// oddEvenClass (3)

function oddEvenClass(querySet, class1, class2) {
	var _isOdd = false;
	for (var child of querySet.children) {
    	_isOdd ? child.classList.add(class1) : child.classList.add(class2);
    	_isOdd = !_isOdd;
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
