## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById: selects one element by its unique id.
getElementsByClassName: selects multiple elements by class and returns a HTMLCollection.
querySelector: selects the first element that matches a CSS selector.
querySelectorAll: selects all elements that match a CSS selector and returns NodeList.
## How do you create and insert a new element into the DOM?
Answer: Create an element with document.createElement() and insert it into the DOM using appendChild
## What is Event Bubbling? And how does it work?
Answer: Event bubbling is when I click on a child element, and the click event doesn’t stop there. It also goes up to its parent, then the parent’s parent, and continues moving upward through the DOM.
## What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is when I add one event listener to a parent element instead of adding listeners to many child elements, and then use event bubbling to detect which child was clicked.
It is useful because it reduces the number of event listeners, improves performance, and also works for dynamically added elements.
## What is the difference between preventDefault() and stopPropagation() methods?

Answer: event.preventDefault() stops the browser's default reload. 