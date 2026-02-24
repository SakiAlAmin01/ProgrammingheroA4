1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById -> selects one element using ID
getElementsByClassName -> selects multiple elements using class name
querySelector -> selects the first matching element (using CSS selector)
querySelectorAll -> selects all matching elements

Simple:
getElementById -> one element
getElementsByClassName -> many elements
querySelector -> first match
querySelectorAll -> all matches


2. How to create and insert a new element into the DOM

First create the element, then add content, then insert it.

Example:
const p = document.createElement("p");
p.innerText = "Hello";
document.body.appendChild(p);


3. What is Event Bubbling?

Event bubbling means the event starts from the clicked element and moves up to its parent.

Example:
If you click a button inside a div, first button event runs, then div event runs.


4. What is Event Delegation? Why is it useful?

Event delegation means adding event listener to the parent instead of adding it to each child.
Why useful:
Less code, Better performance, Works for new elements added later.


5. Difference between preventDefault() and stopPropagation()

preventDefault() -> stops default behavior
Example: stops a link from opening

stopPropagation() -> stops event from going to parent

Simple:
preventDefault -> stops default action
stopPropagation -> stops bubbling

