<!-- # js-game


//notes about dom manipulation
// const body = document.body;
// body.append('Hello World');
//with appendchild you can only append elements and one thing at a time
//with append you can do multiple elements at the same time as well as strings

// const div = document.createElement('div');
//innerText - only the text, no styling when printed
// div.innerText = 'Hello world';

//textContent - will include styles included in text when printed, looks at the css
// div.textContent = 'Hello world 2';

//innerHTML - can use html tags to  modify the code, but is a huge security issue
// div.innerHTML = '<strong>Hello Friends</strong>';

// instead you can do - create a 'strong' element to avoid using innerHTML
// const strong = document.createElement('strong');
// strong.innerText = 'hello world 2';
// div.append(strong);

// body.append(div);

//to use query selectors
// const div = document.querySelector('div');
// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');

//completely removes element, does not show in dom at all
// spanBye.remove();

//to add back in
// div.append(spanBye);

//can also remove from parent
// div.removeChild(spanHi);

//to get certain attributes from items, very explicit
// console.log(spanHi.getAttribute('title'));
//or - less explicit
// console.log(spanHi.title);

//to set an attribute
// spanHi.setAttribute('id', "why");
//or
// spanHi.id = "also why"

//to delete an attribute
// spanHi.removeAttribute('title');

//custom attributes = data attributes, to retreive use .dataset
// console.log(spanHi.dataset);
// console.log(spanHi.dataset.test);
// console.log(spanHi.dataset.longerName);

//to set a new custom attribute
// spanHi.dataset.newName = 'this is a new name';

//accessing classes
// spanHi.classList.add('new-class');
// spanHi.classList.remove('hi1');
// spanHi.classList.toggle('hi2'); //can also add boolean

//directly changing the style of elements
// spanHi.style.color = 'red'; -->
